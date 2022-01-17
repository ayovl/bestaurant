'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d7fce9fee471194aa8b5b6e47267f03",
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
".git/index": "8106299501144c7a0397d9413a368411",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e574dc6d778f9d7312df1c4df6f5f900",
".git/logs/refs/heads/main": "0e927f1a570ecfca1e089a1d0383511d",
".git/logs/refs/remotes/origin/main": "b80095eeb96ed41a149e327c47d9e0b5",
".git/objects/05/7df262f62ea73af611ba73e80c9ca4110d3dec": "daa6cb996c2dfe1edee50823c216b842",
".git/objects/06/cbf8701a34885a6effd262af5329f2d79dc12b": "93177c3ae5d975c578cd97a44a1b5346",
".git/objects/11/32c5ed72d6f787f0430be13f09ddc393e69f6a": "c9af2876a185ec23952207b00cd39209",
".git/objects/16/bf724acee60837a7d47ff3a4c56f8c75ab2918": "8498739d7fb8f81521bdb3851d77b271",
".git/objects/18/3181f0172db6f2be830696249ac734b35fb05f": "edc91f3223c102d47d4bb277cf374fbb",
".git/objects/19/a57e0304d05454d5756eb6a1f4196ce7cf61db": "24bfe2f72a20d3ebeec360a5fda65057",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/23/b6827fff12d4fc2b29da7da0ed4a0cb80c5805": "a057fbc36d261a4dd91374d2fcec1b5e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/39/1132085d2337d98f71d51e1ca41e2dd5e5e4cb": "fbe7c86d1b01c0af730eb945c12fb763",
".git/objects/3b/7364996ad29d54598f0c5e93024e7f7bfce240": "073958b776025d375d3b80e6fa5349a5",
".git/objects/3b/9b9ca616921c344df39d10061ae683d1a5f1b7": "3bc21d95b80036baeb403008d8f9aa2b",
".git/objects/40/893fee6a8b67b63c8aaeb8d0ca26976e97818e": "804093d7deb8115d56b565e542730374",
".git/objects/48/04badbc16396707efefe51f3d5debf75ba36cd": "77738e1c12300a90b3d44f14ab350834",
".git/objects/55/016de6fb99278e45c7052761a9098666dab260": "f96942756b6d3dfffebf701f5cd01099",
".git/objects/55/ef3200b3b086e0463d9098953ee3160a47c775": "cd016c395a1ed5c7e3d6b43c46008c61",
".git/objects/57/21bd1b4651e36738c68268bb386336a8475b59": "086c09734b915702d39d07417808ed2f",
".git/objects/58/548ad6857069dc8b37a8818cfa03693c200f44": "f3be8af1dabfabed9a453bae647794ad",
".git/objects/58/c052ab4a57d61e2bf55982b05febe56383a8b9": "bc9d2b9c7968de35a536ba8038ec1031",
".git/objects/6a/a007a5493fccdcb4f695a61a69f1349afa1bc1": "86096b013ae095b88df910a1b87cb550",
".git/objects/6b/db1b12854daa1d21b4266fe22215c4c8d43528": "db6cf422196b52ac9517e473e2343c87",
".git/objects/6c/94ef247ab62900940e59648820a6fd815f13c3": "afa1dfec8895601776ab7aa82f27ef6c",
".git/objects/70/0602ae6fb58dd7139afd0bf28f19686abc374d": "7d4d7b53f0947822a36d9c5e4534d140",
".git/objects/72/62fab5c8299346a48e21c75317a3c0ed48f256": "10cc09758d87bf28b9d5c3489229961e",
".git/objects/74/c2175512b4992f7f36ee4b9ff4773de0a1efb4": "74cd55d67da1e21d41057ce77e94a80d",
".git/objects/76/10603c294c64444c1695af6fc795feb095f507": "f0a777a8efc47bb7fd9a50c05fd1f5b9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/9b4905e1839ee47426c40e815b54deb4f9cc4a": "6bdd933397666e569d98913460cfb0dc",
".git/objects/87/1bc77201debefc3c371347c8490725ff21234d": "31dd5a3dd246386f43a1166f001b1e07",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/92/31b5e8d10859cd281d01b66562acd6d705a9f1": "afb7c9093a36efbd82a37ef967675221",
".git/objects/95/36a53f7606ecfdc8cca122d6dad21ec716b3b5": "38e41f562e545bed37847d2c940ccc01",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/5f8635b912f05537695e75be9dca53b029bc44": "13ea5a40e78983085eb7c0362acda4fe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a4f2b606f3d3d323ef096c8d43c74f48b1fa9c": "630e34f853f32dc8abff5c41ca40b1e0",
".git/objects/a4/6fadcce85e775bfbdfea400030f8ba1dd6b333": "1f1e59ab591012740fb67954f67f77de",
".git/objects/a6/1446db9477be5ebda639939b1ef707a1cac1fe": "cfd1eb626574e5d061602bf96ad18050",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/839857e62b368c59e2c5db5acb6ab25bcc8f74": "c61740eb5fc5eb3f1108d954517f26f3",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b5/8b9e1f59885dabc25b3d03e90b9cdfd595ef6b": "120a07a16d45219d5627056350b22a5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4c0d6bfa0d35ddc93175bef45bcfc9cb5bffdd": "b700859a769fb45e5efa3c01b0bdf664",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cee4419a4c784ae5b5a84634ff0105183ef3ae": "9de831ab0ec9547c51910781d79765f1",
".git/objects/bf/d382e387bd397a736a436ee8c10d588c206d26": "c1c43f78a4b4ab3a62e045c7667ac952",
".git/objects/c5/e2ac2adb43d6c18842079e2a8459923458e106": "ea5e41eaff46cd4197b1a609354be228",
".git/objects/c8/c1f30ca27f606bba7ddb5e8017e20243625591": "d3b4e5d0fcf31936a87892ba8764894e",
".git/objects/cc/1403acfaa8f123c760a51535be3214402caf93": "dc26a3bda79131e4ae09e3888f804e54",
".git/objects/d0/398f5abfc3a68e8e6e9ff8c79fdace76934e22": "760d63eb5ec1779469959e4964b842de",
".git/objects/d0/bdda2666946441b60ff569b84eaf75812f6ec7": "5f137d5f7f182abce90022f08c57f165",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/f0bf5b5552d7a3f963e2f0e515efc330847050": "c90bc2c53d958e74e91015dc5338c0ea",
".git/objects/ea/4f1ced18a56090b31b730a1f09081440f73c43": "b86e02deb1cea634bdbc42d8a11d400f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "fa67ef622c2c6a899abd15cb10d84e3e",
".git/refs/remotes/origin/main": "64ddc22b669712f3db2de1e4aa4d0d2d",
"assets/AssetManifest.json": "2edf635e6d1e9731177b07b1a0675020",
"assets/assets/fonts/kanit-Regular.ttf": "b935eb6769e902b3b0086459a7c55a05",
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
"index.html": "d5b9c8a17246125e910b44706f1659b1",
"/": "d5b9c8a17246125e910b44706f1659b1",
"main.dart.js": "e3b32dc69e440f9601c654797aa1ebd2",
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
