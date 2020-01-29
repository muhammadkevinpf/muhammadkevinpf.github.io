// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

// workbox.core.setCacheNameDetails({
//     prefix: 'cache-portfolio',
//     precache: 'precache',
//     runtime: 'runtime'
// });

// workbox.routing.registerRoute(
//     new RegExp('\.css$'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'cache-css',
//         plugins:[
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 3,
//                 maxEntries: 20,
//                 purgeOnQuotaError: true
//             })
//         ]
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('\.(png|svg|jpg|jpeg)$'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'cache-images',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 3,
//                 maxEntries: 50,
//                 purgeOnQuotaError: true
//             })
//         ]
//     })
// );

// workbox.precaching.precacheAndRoute([
//     { url: '/index.html', revision: '1' },
//     { url: '/manifest.json', revision: '1' },
//     { url: '/css/bootstrap.min.css', revision: '1' },
//     { url: '/css/style.css', revision: '1' },
//     { url: '/css/fontawesome.css', revision: '1' },
//     { url: '/img/icon/icon.png', revision: '1' },
//     { url: '/img/icon/logo-512.png', revision: '1' },
//     { url: '/img/icon/logo-256.png', revision: '1' },
//     { url: '/img/icon/logo-192.png', revision: '1' },
//     { url: '/img/icon/logo-152.png', revision: '1' },
//     { url: '/img/icon/logo-144.png', revision: '1' },
//     { url: '/img/icon/logo-128.png', revision: '1' },
//     { url: '/img/bjb1.png', revision: '1' },
//     { url: '/img/bootstrap.png', revision: '1' },
//     { url: '/img/css-3.svg', revision: '1' },
//     { url: '/img/flociti.png', revision: '1' },
//     { url: '/img/html5.svg', revision: '1' },
//     { url: '/img/ird3.png', revision: '1' },
//     { url: '/img/javascript.svg', revision: '1' },
//     { url: '/img/jquery.png', revision: '1' },
//     { url: '/img/klinik.png', revision: '1' },
//     { url: '/img/link.svg', revision: '1' },
//     { url: '/img/materialize.png', revision: '1' },
//     { url: '/img/profile.png', revision: '1' },
//     { url: '/img/pwa.png', revision: '1' },
//     { url: '/js/bootstrap.bundle.min.js', revision: '1' },
//     { url: '/js/jquery.js', revision: '1' },
//     { url: '/webfonts/fa-solid-900.ttf', revision: '1' },
//     { url: '/webfonts/fa-solid-900.woff', revision: '1' },
//     { url: '/webfonts/fa-solid-900.woff2', revision: '1' },
//     { url: '/webfonts/fa-brands-400.ttf', revision: '1' },
//     { url: '/webfonts/fa-brands-400.woff', revision: '1' },
//     { url: '/webfonts/fa-brands-400.woff2', revision: '1' },
//     { url: '/webfonts/fa-brands-400.eot', revision: '1' },
//     { url: '/webfonts/fa-brands-400.svg', revision: '1' },
// ]);