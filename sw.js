// SUBSTITUA TODO O CONTEÚDO do sw.js por este:
// sw.js - CACHE OTIMIZADO (LONGO PRAZO)
const CACHE_NAME = 'kibox-v2.1'; // ⚠️ MUDE A VERSÃO para forçar novo cache
const LONG_TERM_CACHE = 'kibox-static-v1';

// URLs para cache LONGO PRAZO (fontes, CSS, JS)
const staticAssetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js', 
    '/sw.js',
    '/robots.txt',
    '/sitemap.xml',
    // Fontes - cache longo
    '/fonts/montserrat-regular.woff2',
    '/fonts/montserrat-medium.woff2',
    '/fonts/montserrat-semibold.woff2',
    '/fonts/montserrat-bold.woff2',
    '/fonts/baskervville-regular.woff2',
    '/fonts/baskervville-italic.woff2',
    '/fonts/redhat-regular.woff2',
    '/fonts/redhat-medium.woff2',
    '/fonts/redhat-bold.woff2',
    '/fonts/cinzel-regular.woff2',
    '/fonts/cinzel-medium.woff2',
    '/fonts/cinzel-semibold.woff2'
];

// INSTALAÇÃO - Cache estático de LONGO PRAZO
self.addEventListener('install', function(event) {
    console.log('🛠️ Service Worker instalado - Cache Longo');
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(LONG_TERM_CACHE)
            .then(function(cache) {
                return cache.addAll(staticAssetsToCache);
            })
            .then(() => {
                console.log('✅ Cache estático de longo prazo criado');
            })
            .catch(function(error) {
                console.log('❌ Falha no cache estático:', error);
            })
    );
});

// Estratégia de Cache-First para recursos estáticos
self.addEventListener('fetch', function(event) {
    // Para recursos estáticos (fontes, CSS, JS, HTML)
    if (staticAssetsToCache.some(asset => event.request.url.includes(asset))) {
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    // Retorna do cache se existe
                    if (response) {
                        return response;
                    }
                    
                    // Se não está no cache, busca na rede e não cacheia
                    // (já está no cache de instalação)
                    return fetch(event.request);
                })
        );
        return;
    }
    
    // Para imagens - estratégia Cache Then Network
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    // Retorna do cache se existe
                    if (response) {
                        return response;
                    }
                    
                    // Busca na rede e cacheia
                    return fetch(event.request).then(function(networkResponse) {
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(function(cache) {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return networkResponse;
                    });
                })
        );
        return;
    }
});