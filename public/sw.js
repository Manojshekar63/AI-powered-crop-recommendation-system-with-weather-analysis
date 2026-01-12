// Basic service worker for offline caching of static assets and CSV data
const CACHE_NAME = 'offline-cache-v1';
const PRECACHE_URLS = [
	'/',
	'/index.html',
	'/favicon.svg',
	'/placeholder.svg',
	'/robots.txt',
	'/data/farm_data.csv',
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
					}
				})
			)
		)
	);
	self.clients.claim();
});

// Network-first for navigation; cache-first for same-origin GET assets
self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	if (request.mode === 'navigate') {
		event.respondWith(
			fetch(request).catch(() => caches.match('/index.html'))
		);
		return;
	}

	if (request.method === 'GET' && url.origin === location.origin) {
		event.respondWith(
			caches.match(request).then((cached) => {
				const networkFetch = fetch(request)
					.then((res) => {
						const resClone = res.clone();
						caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
						return res;
					})
					.catch(() => cached);
				return cached || networkFetch;
			})
		);
	}
});



