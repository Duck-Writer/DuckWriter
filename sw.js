// Define a name for your cache and the files you want to save
const CACHE_NAME = 'duck-writer-v1';
const DUCK_FILES_TO_CACHE = [
  '/Duckwriter/',
  '/index.html',
  '/icons/duck192.png'
  '/icons/duck512.png'

  '/sounds/tp1.mp3'
 '/sounds/tp2.mp3'
 '/sounds/tp3.mp3'
 '/sounds/tp4.mp3'
 '/sounds/cr1.mp3'
'/sounds/sp2.mp3'
];

// 1. The 'install' event - Fired when the service worker is first installed.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(DUCK_FILES_TO_CACHE);
      })
  );
});

// 2. The 'fetch' event - Fired every time the app requests a resource (e.g., a file or data).
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching ', event.request.url);

  event.respondWith(
    // Check the cache first for a match
    caches.match(event.request)
      .then((response) => {
        // If a match is found in the cache, return it.
        // Otherwise, fetch it from the network.
        return response || fetch(event.request);
      })
  );
});
