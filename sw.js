// sw.js - SERVICE WORKER CORRIGIDO E OTIMIZADO
const CACHE_NAME = 'kibox-v2.3'; // ⚠️ ATUALIZEI PARA v2.3
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
    self.skipWaiting(); // ⚡ ATIVAÇÃO IMEDIATA
    
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

// ATIVAÇÃO - Limpeza de caches antigos
self.addEventListener('activate', function(event) {
    console.log('🚀 Service Worker ativado - Kibox Vidraçaria');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    // 🔥 DELETA TODOS os caches antigos (exceto os atuais)
                    if (cacheName !== CACHE_NAME && cacheName !== LONG_TERM_CACHE) {
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

// Estratégia INTELIGENTE para diferentes tipos de recursos
self.addEventListener('fetch', function(event) {
    const request = event.request;
    const url = new URL(request.url);
    
    // 🚫 IGNORA requisições problemáticas
    if (request.url.includes('googletagmanager') ||
        request.url.includes('google-analytics') ||
        request.url.includes('fonts.gstatic.com') ||
        request.url.includes('fonts.googleapis.com')) {
        return;
    }

    // 🎯 ESTRATÉGIA 1: NETWORK FIRST para HTML (SEMPRE ATUALIZADO)
    if (request.headers.get('Accept')?.includes('text/html')) {
        event.respondWith(
            fetch(request)
                .then(function(networkResponse) {
                    // ✅ ATUALIZA o cache com a versão mais recente
                    if (networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(LONG_TERM_CACHE)
                            .then(function(cache) {
                                cache.put(request, responseClone);
                                console.log('📄 HTML atualizado no cache:', url.pathname);
                            });
                    }
                    return networkResponse;
                })
                .catch(function() {
                    // 🆘 FALLBACK: Retorna do cache se offline
                    return caches.match(request);
                })
        );
        return;
    }

    // 🎯 ESTRATÉGIA 2: CACHE FIRST para recursos estáticos
    if (staticAssetsToCache.some(asset => request.url.includes(asset)) ||
        request.destination === 'style' || 
        request.destination === 'script' ||
        request.destination === 'font') {
        
        event.respondWith(
            caches.match(request)
                .then(function(response) {
                    // ✅ RETORNA DO CACHE se existe
                    if (response) {
                        return response;
                    }

                    // 🌐 BUSCA NA REDE (fallback)
                    return fetch(request).then(function(networkResponse) {
                        return networkResponse;
                    });
                })
        );
        return;
    }
    
    // 🎯 ESTRATÉGIA 3: CACHE THEN NETWORK para imagens
    if (request.destination === 'image') {
        event.respondWith(
            caches.match(request)
                .then(function(response) {
                    // ✅ Retorna do cache se existe
                    if (response) {
                        return response;
                    }
                    
                    // 🌐 Busca na rede e cacheia
                    return fetch(request).then(function(networkResponse) {
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(function(cache) {
                                    cache.put(request, responseToCache);
                                });
                        }
                        return networkResponse;
                    });
                })
        );
        return;
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

// ⚡ AUTO-UPDATE: Permite pular a espera via mensagem
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});