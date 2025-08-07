// Define a name for your cache and the files you want to save
// const CACHE_NAME = 'duck-writer-v1';
// const DUCK_FILES_TO_CACHE = [
//  '/DuckWriter/',
//  '/index.html',
//  '/icons/duck192.png',
//  '/icons/duck512.png',

//  '/sounds/tp1.mp3',
// '/sounds/tp2.mp3',
// '/sounds/tp3.mp3',
// '/sounds/tp4.mp3',
// '/sounds/cr1.mp3',
//  '/sounds/sp2.mp3'
//  ];




const FILES_TO_CACHE = [
    '/' 
    '/index.html'

];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('duck-writer-v1').then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});


self.addEventListener('fetch', (event) => {
  // For now, do nothing and let the request go to the network
  return;
});

