// sw.js - SERVICE WORKER CORRIGIDO
const CACHE_NAME = 'kibox-v2.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', 
  '/script.js',
  '/sw.js',
  '/robots.txt',
  '/sitemap.xml',
  // ✅ ADICIONE AS IMAGENS AQUI:
  'icons8-google-logo-48.png?raw=true',
  '2.jpg?raw=true',
  '3.jpg?raw=true',
  '4.jpg?raw=true',
  '5.jpg?raw=true',
  '6.jpg?raw=true',
  '7.jpg?raw=true', 
  '8.jpg?raw=true',
  '9.jpg?raw=true',
  '10.jpg?raw=true',
  '11.jpg?raw=true',
  '12.jpg?raw=true'
];

// INSTALAÇÃO - Cache dos CRÍTICOS + IMAGENS
self.addEventListener('install', function(event) {
  console.log('🛠️ Service Worker instalado - Kibox Vidraçaria');
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('❌ Falha no cache inicial:', error);
      })
  );
});

// ATIVAÇÃO (mantido igual)
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker ativado - Kibox Vidraçaria');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ✅ APENAS UM EVENT LISTENER PARA FETCH
self.addEventListener('fetch', function(event) {
  // 🚫 Ignora requisições problemáticas
  if (event.request.url.includes('googletagmanager') ||
      event.request.url.includes('google-analytics') ||
      event.request.url.includes('fonts.gstatic.com') ||
      event.request.url.includes('fonts.googleapis.com')) {
    return;
  }

  // 🎯 PARA NAVEGAÇÃO (PÁGINAS)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          return caches.match('/index.html')
            .then(function(response) {
              return response || new Response(`
                <!DOCTYPE html>
                <html>
                <head><title>Vidraçaria Kibox - Offline</title></head>
                <body>
                  <h1>📶 Você está offline</h1>
                  <p>Conteúdo temporariamente indisponível.</p>
                </body>
                </html>
              `, { headers: { 'Content-Type': 'text/html' }});
            });
        })
    );
    return; // ⚠️ IMPORTANTE: return para não executar o código abaixo
  }

  // 🖼️ PARA RECURSOS ESTÁTICOS (CSS, JS, IMAGENS)
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // ✅ Retorna do cache se existe
        if (response) {
          return response;
        }

        // 🌐 Busca na rede e faz cache
        return fetch(event.request).then(function(networkResponse) {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          // ⚡ Faz cache da resposta
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return networkResponse;
        });
      })
      .catch(function() {
        // 🆘 Fallback básico
        if (event.request.destination === 'style') {
          return new Response('', { headers: { 'Content-Type': 'text/css' }});
        }
        return new Response('');
      })
  );
});