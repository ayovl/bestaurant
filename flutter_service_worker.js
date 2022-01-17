'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2edf635e6d1e9731177b07b1a0675020",
"assets/assets/fonts/kanit-Black.ttf": "a9f2d889e6e5214b12ac36acbe473c1d",
"assets/assets/fonts/kanit-Regular.ttf": "b935eb6769e902b3b0086459a7c55a05",
"assets/assets/list1_images/icon.png": "d6414e5ce6ef34ac0a167079bff56fe4",
"assets/assets/list1_images/icon2.png": "3c696fc3a7c17f269668e3c42c93bca4",
"assets/assets/list1_images/icon3.png": "c85d7e6b14352098206006e8422a01e8",
"assets/assets/list1_images/whata_paratha.jpg": "55e3ba2775f204758ed9b54e17b64422",
"assets/assets/restaurant_images/burning_brownie.jpg": "af1e02d574210c54b382533ffab20835",
"assets/assets/restaurant_images/chaaye_khana.jpg": "fdec0e4964190cb5ec57526bc7d2da59",
"assets/assets/restaurant_images/cinnabon.jpg": "a4bfb1e6a2dff067e45f6f63ed4a186d",
"assets/assets/restaurant_images/des_pardes_restaurant.jpg": "c1be2022f75c50a87c1778c44e672aae",
"assets/assets/restaurant_images/golden-dragon.jpg": "81726220d4054ea89fbf1c2dd527da99",
"assets/assets/restaurant_images/grill.jpg": "fefaab113fa72032c009be9d7c4e254f",
"assets/assets/restaurant_images/hangout_cafe.jpeg": "42a7a0e08b2526307d30fb64a2a3ede3",
"assets/assets/restaurant_images/hangout_cafe.jpg": "24be2314d6f1ea5cff019c768b51d9bc",
"assets/assets/restaurant_images/icon.png": "d6414e5ce6ef34ac0a167079bff56fe4",
"assets/assets/restaurant_images/icon2.png": "3c696fc3a7c17f269668e3c42c93bca4",
"assets/assets/restaurant_images/icon3.png": "c85d7e6b14352098206006e8422a01e8",
"assets/assets/restaurant_images/jungle_spot.jpg": "8bbd9dc2a9c35f4fbe8421f367a43128",
"assets/assets/restaurant_images/kaspa's_desserts.jpg": "a0b2035fcb4e333fa4fbb3a0499d45f8",
"assets/assets/restaurant_images/maantu_gul.jpg": "ecd2b02cc4b3a9da79c4f7296e0837ce",
"assets/assets/restaurant_images/mocca_coffee.jpg": "2f23b56b49f8d9cebc6d94933c7a3877",
"assets/assets/restaurant_images/pizza_party.jpg": "c14a8570461c164c25c121a012370200",
"assets/assets/restaurant_images/saffron_foodies.jpg": "a6fcabbb283ec3959b42b68153a38c4a",
"assets/assets/restaurant_images/street1_cafe.jpg": "adbbbbe3e6407432df5b15229b5c543d",
"assets/assets/restaurant_images/tandoori_restauran.jpg": "3570563b51534a3fcdbc6ff514d709e6",
"assets/assets/restaurant_images/the_coffee_bean.jpg": "8128d0f1d1008a6c8a236ae1276b4569",
"assets/assets/restaurant_images/tuscany_courtyard.jpg": "5d89deb9820e404609e6362d77543c52",
"assets/assets/restaurant_images/whata_paratha.jpg": "55e3ba2775f204758ed9b54e17b64422",
"assets/assets/restaurant_images/wild_rice_restaurant.jpg": "28eb5ae3f197e45f7d98ab83f042715a",
"assets/FontManifest.json": "96c66db71ff4cb6f9c29ad35ff78d14f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5af975dc4a0c4f41b48dae3886c6726e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6340c76d48058f697ef066f9c8289e27",
"/": "6340c76d48058f697ef066f9c8289e27",
"main.dart.js": "510412010370443fe13c0c2bdc4d14be",
"manifest.json": "2d24b8f71c7a6a19f97be42f59bb1577",
"version.json": "d9282d8f06dbd5d69e9dcd4db3cc16c8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
