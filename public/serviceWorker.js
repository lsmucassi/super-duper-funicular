const CACHE_NAME = "version-1"
const urlsToCache = [ 'index.html', 'ofline.html' ]

const self = this

//install the SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')

                return cache.addAll(urlsToCache)
            })   
    )
})

//Listen for requests
self.addEventListener('fetch', (event) => {

})

// activate the SW
self.addEventListener('activate', (event) => {

})