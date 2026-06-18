/**
 * COD Mobile Loadout Generator — Service Worker
 * Cache-first strategy for offline support
 */

const CACHE_NAME = 'codm-loadout-v4';
const ASSETS = [
	'./',
	'./index.html',
	'./css/styles.css',
	'./js/weapon-data.js',
	'./js/loadout-generator.js',
	'./assets/cod_background.jpeg',
	'./assets/apple-touch-icon.png',
	'./assets/favicon.ico'
];

// Install — cache all core assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => cache.addAll(ASSETS))
			.then(() => self.skipWaiting())
	);
});

// Activate — clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(keys =>
			Promise.all(
				keys.filter(key => key !== CACHE_NAME)
					.map(key => caches.delete(key))
			)
		).then(() => self.clients.claim())
	);
});

// Fetch — cache-first, fallback to network
self.addEventListener('fetch', (event) => {
	// Skip non-GET and cross-origin requests
	if (event.request.method !== 'GET') return;

	// For CDN resources (fonts, icons), use network-first
	if (!event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			fetch(event.request)
				.then(response => {
					const clone = response.clone();
					caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
					return response;
				})
				.catch(() => caches.match(event.request))
		);
		return;
	}

	// For local assets, cache-first
	event.respondWith(
		caches.match(event.request)
			.then(cached => {
				if (cached) {
					// Update cache in background
					fetch(event.request).then(response => {
						caches.open(CACHE_NAME).then(cache => cache.put(event.request, response));
					}).catch(() => {});
					return cached;
				}
				return fetch(event.request).then(response => {
					const clone = response.clone();
					caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
					return response;
				});
			})
	);
});
