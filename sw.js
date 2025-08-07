const FILES_TO_CACHE = [
    '/DuckWriter/' ,
    '/DuckWriter/index.html',
    '/DuckWriter/icons/duck192.png',
    '/DuckWriter/icons/duck512.png'
//    '/DuckWriter/sounds/tp1.mp3'
  //      '/DuckWriter/sounds/tp2.mp3',
    //    '/DuckWriter/sounds/tp3.mp3',
      //  '/DuckWriter/sounds/tp4.mp3',
// '/DuckWriter/sounds/cr1.mp3',
  //   '/DuckWriter/sounds/sp2.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('duck-writer-v1').then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
