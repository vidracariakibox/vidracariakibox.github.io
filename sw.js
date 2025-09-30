<<<<<<< HEAD
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
=======
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
>>>>>>> parent of e665e1d (CSS JAVA, SW adicionados)
];

// INSTALAÇÃO - Cache dos CRÍTICOS + IMAGENS
self.addEventListener('install', function(event) {
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of e665e1d (CSS JAVA, SW adicionados)
});