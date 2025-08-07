const FILES_TO_CACHE = [
    '/DuckWriter/' ,
    '/DuckWriter/index.html',
     '/DuckWriter/icons/tp1.mp3',
 '/DuckWriter/icons/cr2.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('duck-writer-v1').then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
