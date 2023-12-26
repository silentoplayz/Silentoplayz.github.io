'use strict';

// Licensed under a CC0 1.0 Universal (CC0 1.0) Public Domain Dedication
// http://creativecommons.org/publicdomain/zero/1.0/

(function() {
    const staticCacheName = 'static';
    const version = 'v5::';
    const GET_METHOD = 'GET';
    const TEXT_HTML = 'text/html';
    const IMAGE = 'image';

    const coreFiles = [
        '/cod_loadout.js',
        '/bodylock.js',
        '/smoothscroll.js',
        '/css/styles.css',
        '/css/font-awesome.min.css',
        '/assets/favicon.ico',
        '/assets/cod_background.jpeg',
        '/',
        '/index.html',
        '/offline.html' // Ensure offline page is cached
    ];

    function updateStaticCache() {
        return caches.open(version + staticCacheName)
            .then(cache => cache.addAll(coreFiles));
    }

    self.addEventListener('install', event => {
        event.waitUntil(updateStaticCache());
    });

    self.addEventListener('activate', event => {
        event.waitUntil(
            caches.keys().then(keys => Promise.all(
                keys.filter(key => key.indexOf(version) !== 0)
                    .map(key => caches.delete(key))
            ))
        );
    });

    self.addEventListener('fetch', event => {
        const { request } = event;
        if (request.method !== GET_METHOD) {
            event.respondWith(networkFallbackToCache(request));
            return;
        }

        if (request.headers.get('Accept').includes(TEXT_HTML)) {
            event.respondWith(handleHtmlRequests(request));
            return;
        }

        event.respondWith(handleNonHtmlRequests(request));
    });

    function networkFallbackToCache(request) {
        return fetch(request).catch(() => caches.match('/offline.html'));
    }

    function handleHtmlRequests(request) {
        let fetchRequest = request;
        if (request.mode !== 'navigate') {
            fetchRequest = new Request(request.url, {
                method: GET_METHOD,
                headers: request.headers,
                mode: request.mode,
                credentials: request.credentials,
                redirect: request.redirect
            });
        }
        return fetch(fetchRequest)
            .then(response => cacheResponse(response, fetchRequest))
            .catch(() => fallbackToCache(request));
    }

    function cacheResponse(response, request) {
        const copy = response.clone();
        caches.open(version + staticCacheName)
            .then(cache => cache.put(request, copy));
        return response;
    }

    function fallbackToCache(request) {
        return caches.match(request)
            .then(response => response || caches.match('/offline.html'));
    }

    function handleNonHtmlRequests(request) {
        return caches.match(request)
            .then(response => response || fetch(request)
                .catch(() => offlinePlaceholderForImages(request)));
    }

    function offlinePlaceholderForImages(request) {
        if (request.headers.get('Accept').includes(IMAGE)) {
            return new Response('<svg>...</svg>', { headers: { 'Content-Type': 'image/svg+xml' }});
        }
    }
})();
