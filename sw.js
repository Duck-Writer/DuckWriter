const FILES_TO_CACHE = [
    '/' 
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('duck-writer-v1').then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
