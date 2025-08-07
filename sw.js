const FILES_TO_CACHE = [
    '/DuckWriter/' ,
    '/DuckWriter/index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('duck-writer-v1').then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
