// sw.js - SERVICE WORKER OTIMIZADO PARA VIDRAÇARIA KIBOX
const CACHE_NAME = 'kibox-v2.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', 
  '/script.js',
  '/sw.js',
  '/robots.txt',
  '/sitemap.xml'
];

// INSTALAÇÃO - Cache apenas dos CRÍTICOS
self.addEventListener('install', function(event) {
  console.log('🛠️ Service Worker instalado - Kibox Vidraçaria');
  self.skipWaiting(); // ⚡ ATIVAÇÃO IMEDIATA
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Cache apenas dos arquivos ESSENCIAIS
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('❌ Falha no cache inicial:', error);
      })
  );
});

// ATIVAÇÃO - Limpeza AGESSIVA de caches antigos
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker ativado - Kibox Vidraçaria');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 🔥 DELETA TODOS os caches antigos
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // ⚡ TOMA CONTROLE IMEDIATO de todas as abas
      return self.clients.claim();
    })
  );
});

// FETCH - Estratégia CACHE FIRST com fallback inteligente
self.addEventListener('fetch', function(event) {
  // 🚫 IGNORA requisições problemáticas
  if (event.request.url.includes('googletagmanager') ||
      event.request.url.includes('google-analytics') ||
      event.request.url.includes('fonts.gstatic.com') ||
      event.request.url.includes('fonts.googleapis.com')) {
    return; // Deixa passar direto
  }

  // 🎯 ESTRATÉGIA CACHE FIRST para recursos estáticos
  if (event.request.destination === 'style' ||
      event.request.destination === 'script' || 
      event.request.destination === 'image' ||
      event.request.url.endsWith('.css') ||
      event.request.url.endsWith('.js')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // ✅ RETORNA DO CACHE se existe
          if (response) {
            return response;
          }

          // 🌐 BUSCA NA REDE e FAZ CACHE para próxima vez
          return fetch(event.request).then(function(networkResponse) {
            // Verifica se a resposta é válida
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // ⚡ FAZ CACHE da resposta para futuro
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          });
        })
        .catch(function() {
          // 🆘 FALLBACK para CSS/JS - retorna versão básica
          if (event.request.destination === 'style') {
            return new Response('', { headers: { 'Content-Type': 'text/css' }});
          }
          return new Response(''); // Resposta vazia como fallback
        })
    );
    
  } else {
    // 🔄 PARA OUTRAS REQUISIÇÕES: Network First
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          // Fallback para página offline
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
          return new Response('📱 Site Vidraçaria Kibox - Em modo offline');
        })
    );
  }
});

// 📱 OFFLINE FALLBACK - Página customizada para offline
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          return caches.match('/index.html')
            .then(function(response) {
              return response || new Response(`
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Vidraçaria Kibox - Offline</title>
                  <style>body{font-family: Arial; text-align: center; padding: 50px;}</style>
                </head>
                <body>
                  <h1>📶 Você está offline</h1>
                  <p>Conteúdo da Vidraçaria Kibox temporariamente indisponível.</p>
                  <p>Verifique sua conexão e tente novamente.</p>
                </body>
                </html>
              `, { headers: { 'Content-Type': 'text/html' }});
            });
        })
    );
  }
});