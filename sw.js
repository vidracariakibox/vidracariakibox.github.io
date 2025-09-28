// sw.js - SERVICE WORKER PARA VIDRAÇARIA KIBOX
const CACHE_NAME = 'kibox-v1.2';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/Logo-da-empresa-somente-imagem.png?raw=true',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/Slide-1-compactadas.webp?raw=true',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/Slide-2-compactadas.webp?raw=true',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/Slide-3-compactadas.Webp?raw=true',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/icons8-whatsapp-48.png?raw=true',
  'https://github.com/Betioli/Vidracaria-Kibox/blob/main/Imagens/Logo-da-empresa-512x512-Kibox.png?raw=true',
  'https://fonts.googleapis.com/css2?family=Baskervville:wght@400;700&family=Cinzel:wght@400;700&family=Montserrat:wght@400;500&family=Red+Hat+Display:wght@400;500&display=swap'
];

// INSTALAÇÃO - Cache dos recursos essenciais
self.addEventListener('install', function(event) {
  console.log('🛠️ Service Worker instalado - Kibox Vidraçaria');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// ATIVAÇÃO - Limpa caches antigos
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
    })
  );
});

// FETCH - Estratégia Cache First para melhor performance
self.addEventListener('fetch', function(event) {
  // Ignora requisições do Google Tag Manager
  if (event.request.url.includes('googletagmanager')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retorna do cache se encontrou
        if (response) {
          return response;
        }

        // Se não está no cache, busca na rede
        return fetch(event.request).then(function(networkResponse) {
          // Opcional: cache de novas requisições
          if (event.request.url.startsWith('http') && 
              (event.request.destination === 'image' || 
               event.request.destination === 'style' ||
               event.request.destination === 'script')) {
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, networkResponse.clone());
              });
          }
          return networkResponse;
        });
      })
      .catch(function() {
        // Fallback para páginas offline
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});