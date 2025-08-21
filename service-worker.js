const CACHE_NAME = 'mca-study-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/fav-study.jpg',
  '/assets/abhi.jpg',
  '/app.js'
];

// Install: cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, then network
self.addEventListener('fetch', event => {
  const request = event.request;

  // Handle PDFs (or any Google Drive links, notes, papers)
  if (request.url.endsWith('.pdf')) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse; // already cached
        }
        return fetch(request).then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, networkResponse.clone()); // save for later
            return networkResponse;
          });
        }).catch(() => {
          return new Response("You are offline. This PDF wasn't cached yet.");
        });
      })
    );
    return;
  }

  // Default strategy: cache-first, then network
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      return cachedResponse || fetch(request);
    })
  );
});
