'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "696b39fdf05ded932f3744e2ae9d9038",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ab7aa4a7485ca6d8e4ab0439fb43308",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "139e68cdfa9c028e039172897b9be3f4",
".git/logs/refs/heads/main": "139e68cdfa9c028e039172897b9be3f4",
".git/logs/refs/remotes/origin/HEAD": "68e021401fab60b4deb00cea7ea0b90f",
".git/logs/refs/remotes/origin/main": "3278811470fc10137b6ed4f9d4527a3d",
".git/objects/43/03aebb7e85a1852fb4890601bd25fa5f7de5a2": "c1d4ff7816c9535a22b1b60a66600ed3",
".git/objects/51/25cd2c4c5649351a6cd4a8a681cf5e182a84e9": "e36234a7575eeb4f5549b72cd92c4dff",
".git/objects/89/b800165c63a32ee801afa3d88474b433d934e0": "0115efd5d25aee49eb9328731a3e85e6",
".git/objects/92/6af9c2821904485c7b18e739bff21e2962764b": "642d1ecfa0bfd9c44ceb7be36debef36",
".git/objects/9b/4a97c0b4397b4bad92b439f341a8ef3d4dffcf": "0933bb3b8960fb5674f0fa19703a4b49",
".git/objects/b6/9fc84be85a7a8eed1618b0ec3b96f210c22df4": "e2d961c4fc014096652740dcc808867d",
".git/objects/d0/ee109d9b0525967257807ac60079d3baffefdc": "615c9af140bfec30c0fb8a03f7e69322",
".git/objects/fd/801f9d6b159bea13aa1f505bb03c7b5182851c": "009219bc9e266e2e5789de5965314a18",
".git/objects/pack/pack-03630d96e598a12948421ba6b00bb00b202fe731.idx": "7a3c6b8fb52b5d7193449e74318eb63e",
".git/objects/pack/pack-03630d96e598a12948421ba6b00bb00b202fe731.pack": "b002e568f03bdb576d75abcd3e5ddc74",
".git/packed-refs": "261bb0a06266a09f2830d240fe5d028b",
".git/refs/heads/main": "db714109fd431b8c80d376f08793ca9b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "db714109fd431b8c80d376f08793ca9b",
"assets/AssetManifest.json": "40ee77dd3b0d1489d61e0c8b48d933de",
"assets/assets/fonts/FredokaOne-Regular.ttf": "4a2f2ea45a0bb1abe81b47d0afde4aae",
"assets/assets/fonts/kanit-Regular.ttf": "b935eb6769e902b3b0086459a7c55a05",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/logo/loading-screen-logo.png": "7faee69c965fb7076622f8abe0d8898f",
"assets/assets/logo/loading-screen-logo.svg": "1601d3ec8a08ff796704bcaa8c18a248",
"assets/assets/logo/loading-screen.png": "7174d5ab915aa9da5bb8f0f434e70323",
"assets/assets/logo/logo.png": "e7423dafeaa0735d70544fdb083ab9c1",
"assets/assets/logo/logo2.png": "636330d5cf061995a9c71b4836a8d8f6",
"assets/assets/logo/logo3.svg": "687b70c43884210e26ecd5153909e050",
"assets/assets/logo/logo4.png": "3e7154c38b9da591c9842d99e09925b4",
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
"assets/FontManifest.json": "c04b6a89b274491027aab4682e375bad",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "73e24f7f78d442a0820d0762c8f32f2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "93f6af1a234e946944becad54b723816",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "daba794ffef91b893dab6698e838cdb0",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b36f832a5dca6c05b03d420f39a24d5",
"/": "1b36f832a5dca6c05b03d420f39a24d5",
"main.dart.js": "92dd077535d886192debeabafd3fa4ea",
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
