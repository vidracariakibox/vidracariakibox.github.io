// sw.js - SERVICE WORKER OTIMIZADO KIBOX VIDRAÇARIA
const CACHE_NAME = 'kibox-v2.5';
console.log('🔄 Service Worker kibox-v2.5 carregado com sucesso!');

const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css', 
  '/script.js',
  '/sw.js',
  '/robots.txt',
  '/sitemap.xml',
  // 🎯 FONTES OTIMIZADAS
  '/fonts/Baskervville-Italic.woff2',
  '/fonts/Baskervville-Regular.woff2',
  '/fonts/Cinzel-Bold.woff2',
  '/fonts/Cinzel-Medium.woff2',
  '/fonts/Cinzel-Regular.woff2',
  '/fonts/Cinzel-SemiBold.woff2',
  '/fonts/Montserrat-bold.woff2',
  '/fonts/Montserrat-medium.woff2',
  '/fonts/Montserrat-regular.woff2',
  '/fonts/Montserrat-semibold.woff2',
  '/fonts/RedHatDisplay-Bold.woff2',
  '/fonts/RedHatDisplay-Medium.woff2',
  '/fonts/RedHatDisplay-Regular.woff2',
  '/fonts/RedHatDisplay-SemiBold.woff2',
    
  // 🎯 IMAGENS CRÍTICAS OTIMIZADAS
  '/Imagens/icons8-google-logo-48.webp',
  '/Imagens/1-Espeho-com-Led.webp',
  '/Imagens/2-Guarda-corpo.webp',
  '/Imagens/3-Vitro-de-2-folhas.webp',
  '/Imagens/4-Divisoria-de-Eucatex.webp',
  '/Imagens/5-Box-frontal.webp',
  '/Imagens/6-Divisoria-de-Eucatex.webp',
  '/Imagens/7-Box-de-abrir-cromado.webp',
  '/Imagens/8-Espelho-organico-duplo.webp',
  '/Imagens/9-Porta-de-Abrir.webp',
  '/Imagens/10-Espelho-organico.webp',
  '/Imagens/11-Porta-de-abrir.webp',
  '/Imagens/12-Espelho-com-Led.webp',
  '/Imagens/13-Divisoria-de-vidro.webp',
  '/Imagens/14-Espelho-com-Led.webp',
  '/Imagens/15-Espelho-com-Led-triplo.webp',
  '/Imagens/16-Box-frontal.webp',
  '/Imagens/17-Porta-de-banheiro-cadeirante.webp',
  '/Imagens/18-Box-frontal-branco.webp',

  
  // IMAGENS OTIMIZADAS PARA MOBILE
  '/Imagens/icons8-google-logo-48.png',
  '/Imagens/1-Espeho-com-Led-308.webp',
  '/Imagens/2-Guarda-corpo-308.webp',
  '/Imagens/3-Vitro-de-2-folhas-308.webp',
  '/Imagens/4-Divisoria-de-Eucatex-308.webp',
  '/Imagens/5-Box-frontal-308.webp',
  '/Imagens/6-Divisoria-de-Eucatex-308.webp',
  '/Imagens/7-Box-de-abrir-cromado-308.webp',
  '/Imagens/8-Espelho-organico-duplo-308.webp',
  '/Imagens/9-Porta-de-Abrir-308.webp',
  '/Imagens/10-Espelho-organico-308.webp',
  '/Imagens/11-Porta-de-abrir-308.webp',
  '/Imagens/12-Espelho-com-Led-308.webp',
  '/Imagens/13-Divisoria-de-vidro-308.webp',
  '/Imagens/14-Espelho-com-Led-308.webp',
  '/Imagens/15-Espelho-com-Led-triplo-308.webp',
  '/Imagens/16-Box-frontal-308.webp',
  '/Imagens/17-Porta-de-banheiro-cadeirante-308.webp',
  '/Imagens/18-Box-frontal-branco-308.webp',
];

// ✅ INSTALAÇÃO ÚNICA E OTIMIZADA
self.addEventListener('install', function(event) {
  console.log('🛠️ Service Worker instalado - Kibox Vidraçaria');
  
  // ⚡ FORÇA ATIVAÇÃO IMEDIATA
  self.skipWaiting();
  
  // 🎯 CACHE INTELIGENTE - SÓ CRÍTICOS
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Criando cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('⚠️ Cache parcial - alguns arquivos podem falhar:', error);
        // ❌ NÃO BLOQUEIA INSTALAÇÃO POR ERROS DE CACHE
      })
  );
});

// ✅ ATIVAÇÃO ÚNICA E COMPLETA
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
      // ⚡ TOMA CONTROLE DE TODAS AS ABAS IMEDIATAMENTE
      return self.clients.claim();
    })
  );
});

// ✅ FETCH ESTRATÉGICO - PERFORMANCE MÁXIMA
self.addEventListener('fetch', function(event) {
  const request = event.request;
  
  // 🔒 PROTEÇÃO CONTRA EXTENSÕES - CORREÇÃO DO ERRO
  if (request.url.startsWith('chrome-extension://') ||
      request.url.startsWith('moz-extension://') ||
      request.url.startsWith('safari-extension://') ||
      !request.url.startsWith('http')) {
    console.log('🚫 Ignorando requisição de extensão:', request.url);
    return;
  }
  
  // 🚫 IGNORA REQUISIÇÕES PROBLEMÁTICAS
  if (request.url.includes('googletagmanager') ||
      request.url.includes('google-analytics') ||
      request.url.includes('fonts.gstatic.com') ||
      request.url.includes('fonts.googleapis.com')) {
    return;
  }

  // 🎯 ESTRATÉGIA: CACHE FIRST + NETWORK FALLBACK
  event.respondWith(
    caches.match(request)
      .then(function(response) {
        // ✅ RETORNA DO CACHE SE DISPONÍVEL
        if (response) {
          return response;
        }

        // 🌐 BUSCA NA REDE
        return fetch(request)
          .then(function(networkResponse) {
            // ✅ VERIFICA SE A RESPOSTA É VÁLIDA
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // ⚡ FAZ CACHE DA RESPOSTA PARA PRÓXIMAS REQUISIÇÕES
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(request, responseToCache);
              });

            return networkResponse;
          })
          .catch(function() {
            // 🆘 FALLBACK OFFLINE INTELIGENTE
            
            // PARA PÁGINAS - RETORNA INDEX.HTML
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            // PARA IMAGENS - RETORNA IMAGEM PLACEHOLDER VAZIA
            if (request.destination === 'image') {
              return new Response(
                '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            
            // PARA CSS - RETORNA CSS VAZIO
            if (request.destination === 'style') {
              return new Response('', { headers: { 'Content-Type': 'text/css' } });
            }
            
            // PADRÃO - RETORNA VAZIO
            return new Response('Recurso offline');
          });
      })
  );
});

// ✅ LIDA COM MENSAGENS (OPCIONAL - PARA FUTURAS FUNCIONALIDADES)
self.addEventListener('message', function(event) {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

console.log('✅ Service Worker Kibox Vidraçaria carregado e pronto!');