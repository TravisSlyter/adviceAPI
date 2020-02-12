importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

if (workbox) {
    console.log(`Yes! Workbox is loaded 🎉`);
  
    workbox.precaching.precacheAndRoute([]);
  
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }
