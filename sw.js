// Service Worker for performance optimization
const CACHE_NAME = 'mca-notes-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/utils/imageOptimization.js',
  '/utils/dataLoader.js',
  '/components/Navigation.js',
  '/components/ThemeContext.js',
  '/assets/fav-study.jpg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests with appropriate strategies
  if (STATIC_ASSETS.includes(url.pathname)) {
    // Cache first strategy for static assets
    event.respondWith(cacheFirst(request));
  } else if (url.pathname.startsWith('/components/')) {
    // Stale while revalidate for components
    event.respondWith(staleWhileRevalidate(request));
  } else if (url.pathname.startsWith('/utils/')) {
    // Stale while revalidate for utilities
    event.respondWith(staleWhileRevalidate(request));
  } else if (url.origin !== location.origin) {
    // Network first for external resources
    event.respondWith(networkFirst(request));
  } else {
    // Default: network first with cache fallback
    event.respondWith(networkFirst(request));
  }
});

// Cache strategies
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline content not available', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  try {
    const cached = await caches.match(request);
    const fetchPromise = fetch(request).then((response) => {
      const cache = caches.open(DYNAMIC_CACHE);
      cache.then((c) => c.put(request, response.clone()));
      return response;
    });

    return cached || fetchPromise;
  } catch (error) {
    console.error('Stale while revalidate strategy failed:', error);
    const cached = await caches.match(request);
    return cached || new Response('Content not available', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('Network first strategy failed:', error);
    const cached = await caches.match(request);
    return cached || new Response('Content not available', { status: 503 });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    );
  }
});

// Push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/assets/fav-study.jpg',
    badge: '/assets/fav-study.jpg',
    vibrate: [100, 50, 100],
    data: {
      url: '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification('MCA Notes', options)
  );
});