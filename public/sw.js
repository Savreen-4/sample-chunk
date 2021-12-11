// sw.js
//3 events needs to provide an offline caching feature.
const cacheName = "kaldiPWA-v1";
const filesToCache = ["favicon.ico"];


// the service starts the caching and if content is cached successfully the service worker becomes installed. 
// In my activation event, I am caching all files in my filesToCache array. If this step fails the service will not proceed to activate.
self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});


// The activate event is the place where cache management happens. If the service worker installed successfully, 
// this step is the activation button that makes that cache available for validation purposes.
self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});


// Fetch will validate/invalidate the cache and leverages event.respondWith to do so. 
// The response from the event returns a JavaScript Promise with all active caches. 
// If the request is already in the cache, then cache is returned immediately. 
// If the request is not cached, then service worker starts to fetch for a new cache.
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});




// self.addEventListener("install", function (event) {
//     console.log("Hello world from the Service Worker 🤙");
//     if ('serviceWorker' in navigator) {
//         window.addEventListener('load', function() {
//           navigator.serviceWorker.register('/sw.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//           }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//           });
//         });
//       }
//   });



// self.addEventListener('install', function(event) {
//     // Perform install steps
    
// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/styles/main.css',
//   '/script/main.js'
// ];

// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });
//   });

