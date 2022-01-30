'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ed0304b2c616ce595e38da468fc310aa",
".git/config": "696b39fdf05ded932f3744e2ae9d9038",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "489a3847f253e7f3bd6c882c7c8c4462",
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
".git/index": "1cc882eafb477900c3c3a15a7b7ac82d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "670c3fa8228aad28b4af2d6271571c41",
".git/logs/refs/heads/main": "d4b4cde7ec3e65385e9162df52f0cc8a",
".git/logs/refs/remotes/origin/main": "bbb9a9d2292f41a4f3cd2c49c5a4323f",
".git/objects/01/03e2ff54afc0c8c536f09ab91b54a5727c9629": "8cce63bec65275cbb60ab18694004c7b",
".git/objects/01/e25d013cfe79329105757a3345aaa6af255872": "7ab689086eb2dd69518ae085140a5bee",
".git/objects/03/f7e272e54aac7e1f8d72baa3a2275fa9c03657": "ee24025f32b79764decb43a6157543c7",
".git/objects/04/9be5c923c97f394bed10bbc7e1a51e242041f0": "32a00d402deef2782124087362c5abfb",
".git/objects/05/7df262f62ea73af611ba73e80c9ca4110d3dec": "daa6cb996c2dfe1edee50823c216b842",
".git/objects/05/d5c17952d7eedcf3c2359f7347946c085d294b": "6f3178d1e168da29ab73b7ac3d95cbac",
".git/objects/06/6ba5a6ce10450e6fd4361e9de69e6a5dae8b72": "a134412d275f5f1ef09ebae797e635eb",
".git/objects/06/cbf8701a34885a6effd262af5329f2d79dc12b": "93177c3ae5d975c578cd97a44a1b5346",
".git/objects/07/93979c1072ffcba5c08c9e3596dcb220bb8e46": "d486533de175f150dfbb46504446f9ef",
".git/objects/0a/0e1012f0c4297bcf1c5fed9846d35f641d5f22": "05d8e8386c404070ee04746cd5414671",
".git/objects/0b/782dfd89a8c4598a13f994e7782fa28c702349": "3886dd864b982c408d072a13bb29173a",
".git/objects/0c/05b2d65fd928d79d1a80112f2147c0c476f6e0": "ef55bad1fb9212bd5b825241209e90ba",
".git/objects/10/5dcb929bc6fa4d0496896f283ddcef5a5b0ae0": "5f7a93841f23881fb49e4543e67a3919",
".git/objects/10/c516a9dc4b3ea3f78d6d5b19d180ddc3dfe9da": "49b9d3720bf08e53140a4ce12ece5b89",
".git/objects/11/32c5ed72d6f787f0430be13f09ddc393e69f6a": "c9af2876a185ec23952207b00cd39209",
".git/objects/12/d88539d9434aa0f5d4773a809e4a4b7a27f18b": "6079dc7a99ef283572ef62017a9d1aad",
".git/objects/16/bf724acee60837a7d47ff3a4c56f8c75ab2918": "8498739d7fb8f81521bdb3851d77b271",
".git/objects/18/3181f0172db6f2be830696249ac734b35fb05f": "edc91f3223c102d47d4bb277cf374fbb",
".git/objects/19/a57e0304d05454d5756eb6a1f4196ce7cf61db": "24bfe2f72a20d3ebeec360a5fda65057",
".git/objects/1a/78c545415970c2ac027f92c7bd495f1c73dbb3": "99a6ae398749d8321e0f7ab6efba4d30",
".git/objects/1a/a4ee95d7fbc7f9a3f40a79ccdd452d53389599": "73fddb78f56662f02a0b16e609446fd2",
".git/objects/1c/11e9c84089a537cbe702df4bdef9e46c037454": "3ebb45b4749c897a6c8898218b7a656e",
".git/objects/1d/c1d8b6f688f16079586c0d245579fe93d8db74": "39002c39c43405d9a76d068ef54536d2",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/4836e17bd65aa2c57bba295f7c8864f2fbdff2": "9ae1240260e5b88a88cc56ea47de07e3",
".git/objects/1e/e44591f5dda4e1ae38f0081888046b2d322289": "8f736ba98320788cdca211fe94ba793f",
".git/objects/20/11405aa292a6254def1d7a1e37422a70e3c9b1": "dc0e3187a1bfa081c0993333b48a806f",
".git/objects/21/009963d2f16a7ca65007c8b7017430ad25449a": "8432c94adb04adacdb310b8e9fe79775",
".git/objects/21/2a4a6d25d9277307d32d4145491ffe24276221": "d2e5e1e981aa9bb0734ea11990962d73",
".git/objects/21/5bc913b3005bfa4a6652bfea80eafe1f2c037b": "f9a6a12f26eac2be8f8400155393fce1",
".git/objects/23/b6827fff12d4fc2b29da7da0ed4a0cb80c5805": "a057fbc36d261a4dd91374d2fcec1b5e",
".git/objects/24/3aa00cace9b2c8ed6e287298bb56e77e91d6fc": "cd2d4e09208943811dd31676d06d423b",
".git/objects/28/fedb6055b281292bba7fe2cbe11dc5dedb064f": "761c2bacbca9b488ab344736c3608962",
".git/objects/29/19462f56e2c8742fa23059a481d45e2d0751dc": "0120f128eccb973577e99d26c6579dd7",
".git/objects/29/b88139635282e551680d246662ebd2b3c31b35": "58a49bfc4afb1cc512a929b37c29b13c",
".git/objects/2f/ca39a7300033ee0fb8c79edd307874c0698176": "d812c67e765528d0113de81d4082dfa3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/1b75b81cdd51602579dc13f3360ac3f21eca41": "bf6e27bbdeb217f949694589fad1511d",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/7f37a7174de2d769d34ff472e9ea3a0dd57a49": "c642754e03579c967c44ddd21c85d81c",
".git/objects/37/866e2ee2a2dc42552f102fc898c27aa728c728": "4191c078c0d9d192c407534d31d8a440",
".git/objects/39/1132085d2337d98f71d51e1ca41e2dd5e5e4cb": "fbe7c86d1b01c0af730eb945c12fb763",
".git/objects/39/7d26048e20228e9af84d242fe00623442a1be9": "fe726ed9c89ad13b84f87108412f6082",
".git/objects/39/b9f7d3b3c1a587f18a75caf8d1d927120b7306": "b6fd5c5b7c29233e72fec3e36112491b",
".git/objects/3b/7364996ad29d54598f0c5e93024e7f7bfce240": "073958b776025d375d3b80e6fa5349a5",
".git/objects/3b/9b9ca616921c344df39d10061ae683d1a5f1b7": "3bc21d95b80036baeb403008d8f9aa2b",
".git/objects/3b/f8951987412dd38068f3a09ee646cbedf332cb": "aab6abf4d60a08b9674ec4e8e3dad2bf",
".git/objects/3e/03660309fe006d49922b04e188361a913529fd": "7ab85977dc65b3bb40ef88aa29f1dfe6",
".git/objects/3e/61e75b110a77c56bbd05dc23f717a67293086c": "ed9a45e64f6c78c0af46cb0526f8fa50",
".git/objects/40/4dce9e4880b3ddb990e7b008da233b812e9fae": "3304a73c7748ac3d8b495110b0150a8e",
".git/objects/40/893fee6a8b67b63c8aaeb8d0ca26976e97818e": "804093d7deb8115d56b565e542730374",
".git/objects/40/9ed28601db0c2b1cf3649ba438a28f3368fb2c": "6b9109c3ec3c3d3d839f4dc6d0aebf33",
".git/objects/41/6fc9d5b0a53baaeb1e45a9cda8e45b98f56b13": "f49312a9f2e390e2363938d1409b3cc0",
".git/objects/42/a1421e1b67bb9e19ebab7470df8d301e7b67b9": "451a4001fc86f856003ab0919d251c21",
".git/objects/42/ceeed6043fd4b1a26e71ca6398f19127da1858": "5f0954aa8113d2100e10631a7985012c",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/43/cff1b90d1d2dee555d9f112d6fdf65edecd4b8": "9c7fe78679d3dba41ee4fa7133540ab1",
".git/objects/44/6e7c2fee6a828a68fa0f4c800d1d074d8d1067": "c2351b3e5b0fc2f4763ed66eb869c2cc",
".git/objects/45/0e92d3f2156169d04b5ebc0413cfd27d757185": "66efed84f901a65ec1af45ed46e05d65",
".git/objects/46/c8f8458fcb511d5f1f82950310f506b7a3d47b": "a8947f1faac524b746bbb7c1eae8faa5",
".git/objects/47/0fccf026383ee582a03e322c5fa0b2d56dec16": "44adb2b26ba315e3c37b68818bbab31d",
".git/objects/48/04badbc16396707efefe51f3d5debf75ba36cd": "77738e1c12300a90b3d44f14ab350834",
".git/objects/48/da6344c3d0d8b0161f937832d1f156e8ede820": "cd615980fa9ae85c413d2e26a238b77b",
".git/objects/49/d8ecff3151d910f3217a1a97c90f24fff348a7": "39aec0177432d6d2c9cd4bf89f4f1b28",
".git/objects/49/fe5969d8804797a8e94ab1a2ade60e5b20d81b": "4c37c8286b58eb919601ffa2d7ae4a7d",
".git/objects/4e/5ac14986e5897793d1a94b516bdc591818b85e": "bf5779a8e81da8a8b97d53aac56ab164",
".git/objects/4e/92f818e26fce723c8e4a4c0f1c59f290a7beee": "81103811ddec1d35820057c8e52d5fc9",
".git/objects/4f/430b22092e34a654318dc1ed918c26d147a896": "215e1527c7eeb86348374c07753800e0",
".git/objects/50/9c107ba37b2bf1e0e37c1d767389e550c6bc5f": "9b4568b78c9572734f24eeaff4d2399a",
".git/objects/51/567903c934e4dc9198a57ccc8ab8a92b45dbc2": "af4255091b7cb878f7aa7b76816495b8",
".git/objects/51/b0d4c0833b7b68f17db74badc62c9032abb6e7": "81fe29282a1b1399a3eabc60ad4b23b0",
".git/objects/54/6a0e72ec8248c2c48748f40692f743683fe892": "a2c84524125fb2c189fe809f282699fd",
".git/objects/55/016de6fb99278e45c7052761a9098666dab260": "f96942756b6d3dfffebf701f5cd01099",
".git/objects/55/ef3200b3b086e0463d9098953ee3160a47c775": "cd016c395a1ed5c7e3d6b43c46008c61",
".git/objects/56/60f93f70f5146fd67d5d21e4ddd666f9393040": "c07d06d29207675972630c12eb3d5393",
".git/objects/56/d02799e7d5088d383b1a777269bb66c45afc40": "6e3c6901867730a43b49ee5ef31548b2",
".git/objects/57/21bd1b4651e36738c68268bb386336a8475b59": "086c09734b915702d39d07417808ed2f",
".git/objects/57/e2130cfb929bf088a80b48ad8a5cbccd496ea5": "d80bca48da7b9294f6e41c0f5b9345b9",
".git/objects/58/548ad6857069dc8b37a8818cfa03693c200f44": "f3be8af1dabfabed9a453bae647794ad",
".git/objects/58/8f3dfab2cbfe1977d9761c7be832ed85407925": "e78f4fca6c78bce7c6266ec39f3518e3",
".git/objects/58/c052ab4a57d61e2bf55982b05febe56383a8b9": "bc9d2b9c7968de35a536ba8038ec1031",
".git/objects/5b/55a7e253b2958ea505a74f6fafdabf789a50d6": "6e32a936dcdf53fbeb725e10c826fd46",
".git/objects/5d/f0d41a3240bb8dbd0eeffd815265f4a88bc1b9": "b4b89ca38aff807d2ee479ca45bbd4c2",
".git/objects/5f/648ea8b11591fe3a1a53eefddaf04d6e351a51": "ec7866b82f76df799295f7c2d8e4a1ef",
".git/objects/61/c7bbf4e2452592b3e5c72ba03f9fe41ebc7e37": "4f585d3a11c91b3badf949f21bc9a989",
".git/objects/62/d2b7ec6ea2419e0b01ff6c4c7f9b31c4de0038": "ed638dfa8892220ed44c5e5f35b08a6f",
".git/objects/64/2e5bb031b3862a439a8b7acde4880f4e60b0ce": "46f5aca58440a3734b44cfdf113d131b",
".git/objects/64/f632bf4ad4a66e9b071e16983d2da534c74c5f": "7579d8ea2b4622bd94af58cd508c0009",
".git/objects/67/425a9ac9b9c86df643733626b17e543e7616e4": "c4eb168f3d12e847196aed074d066e7e",
".git/objects/69/161e49cf18aa78d7253cf3872477792e3c892d": "b9f98a6e7c4bf8edde51f9ee06646cdd",
".git/objects/6a/a007a5493fccdcb4f695a61a69f1349afa1bc1": "86096b013ae095b88df910a1b87cb550",
".git/objects/6b/db1b12854daa1d21b4266fe22215c4c8d43528": "db6cf422196b52ac9517e473e2343c87",
".git/objects/6c/94ef247ab62900940e59648820a6fd815f13c3": "afa1dfec8895601776ab7aa82f27ef6c",
".git/objects/6c/d7ce670ad268d37afd1af90d38d39db906a93b": "150b7a76551ca9082c61e761b82cee41",
".git/objects/6f/9ad611b1ec98afaa960efc1645b776a7bc75c7": "b4ff94d42f9cc57379576561ca09175b",
".git/objects/6f/d7e73daefaecaf8811a7a840596a080a849d96": "2e3221ea8ac754494c8ef21b1ea6e5d2",
".git/objects/70/0602ae6fb58dd7139afd0bf28f19686abc374d": "7d4d7b53f0947822a36d9c5e4534d140",
".git/objects/70/77b9c6897bf8d17df89ccb120f4dc41f69f42c": "809dae47deb932281fcdbe616adc4711",
".git/objects/72/62fab5c8299346a48e21c75317a3c0ed48f256": "10cc09758d87bf28b9d5c3489229961e",
".git/objects/74/b8b2debf14672ddbf20e17de78280ac05ea82d": "1149098e037a6b981f572e4ecb8f9ce0",
".git/objects/74/c2175512b4992f7f36ee4b9ff4773de0a1efb4": "74cd55d67da1e21d41057ce77e94a80d",
".git/objects/75/1f62c9b21e151eacbafa80eb76a9913aeee2fc": "5c4284e2e97962c693fd150046ce3979",
".git/objects/75/2c617ba6f23735d08704138362da3fac65866c": "9d089ab5bc20d136b3caf6713c6b9a80",
".git/objects/75/efb2a7ae724720ef61ccaf9a287f1acfb415cd": "8e21e6a0c9fa8e635f34c4ee7e357e59",
".git/objects/76/10603c294c64444c1695af6fc795feb095f507": "f0a777a8efc47bb7fd9a50c05fd1f5b9",
".git/objects/77/e261450bfc9699daaca5e08d80ae66f44c53f4": "37689fd91cb08c73d29a72c7040080d8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ea66f78430d186ec7aa7530b043fd39ff975fc": "0c8f7e7304658690b4e2cf70f54d7c6f",
".git/objects/7b/7f73a553d6fee0a2613b64793a2609687ea800": "8d08b6493868f336d56d28d0d22dc1bb",
".git/objects/7e/d925aec0de81c3cddba77a1dc9f0c26fbe5bff": "e6eeef31a0e625cc3b827cb27be36365",
".git/objects/80/e9fb216acbdaa9800ee73b29f65411e3881edc": "fe155049c7eef8bc1472f831a57e0591",
".git/objects/81/54d0d199efc70dfa035d925a0521a16dd57438": "31ad9ef4753f42cf9bec0534b6b6449d",
".git/objects/86/9b4905e1839ee47426c40e815b54deb4f9cc4a": "6bdd933397666e569d98913460cfb0dc",
".git/objects/86/d02fa497eadda78761fcd7415bef98b20b15cc": "8666af01510e9b91904980085c26b769",
".git/objects/87/1bc77201debefc3c371347c8490725ff21234d": "31dd5a3dd246386f43a1166f001b1e07",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/62f42484483e97ec741ea8b1d09bf0ee2b4423": "4a713cc2bf7c09347d2883379799eedc",
".git/objects/90/4f07b0b9ca19ad1f12f916637911a4de56142f": "20feae4a8c7fb706b3ecaf64d4cfa46f",
".git/objects/90/88f98746e206e279b8fec4d9fcab9f966d8ab2": "137c9565c037cc907ad3ae43c06c213a",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/92/31b5e8d10859cd281d01b66562acd6d705a9f1": "afb7c9093a36efbd82a37ef967675221",
".git/objects/94/977447dabfe82424725beaeb9de11b73bfd389": "328dac91793c3fb1a91aef0d7e1e66da",
".git/objects/95/36a53f7606ecfdc8cca122d6dad21ec716b3b5": "38e41f562e545bed37847d2c940ccc01",
".git/objects/97/cd6217f4c0c3c1221dd91fb9c2451a116eaa3e": "c00660cf70145e97f1d122a6a838ec23",
".git/objects/99/8352f0d0c3492f101ad0339ec1805de092df71": "c08f2d43e6b463daebba639d82367994",
".git/objects/9b/384aa8ff4aac1add15b7d39f261a61bc1636cc": "63bb543b59cb3805bbc7422989530539",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/5f8635b912f05537695e75be9dca53b029bc44": "13ea5a40e78983085eb7c0362acda4fe",
".git/objects/9d/a7eb041c269baf384649c1b29bcd554765f70a": "545b1457b00d34c92b1dcee6b742698f",
".git/objects/a0/233568a6b055e0f7da54aabf26cd8794fd5a5a": "38baf7f8bcd39a9b7c797adf2a09d4bc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a4f2b606f3d3d323ef096c8d43c74f48b1fa9c": "630e34f853f32dc8abff5c41ca40b1e0",
".git/objects/a2/42d2364949ed3e5bac79cdd31a97bce46ae067": "5f4e2b43a4a5be2957e1a6376b2aa1c7",
".git/objects/a3/e9132527454287398d21905e4b80503ba56cbb": "e736f88b9476a78b752aa5be046409dd",
".git/objects/a4/0f3e2dbdef4c5144a7d686d90c660819db4e35": "cd68466804cdcf6c37f0dbf5758df220",
".git/objects/a4/6fadcce85e775bfbdfea400030f8ba1dd6b333": "1f1e59ab591012740fb67954f67f77de",
".git/objects/a5/d5190f03dd9a1bde51bac4c093d30ee83a8f0f": "19a97bd6bbf019479303ec3068339fc5",
".git/objects/a6/1446db9477be5ebda639939b1ef707a1cac1fe": "cfd1eb626574e5d061602bf96ad18050",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/839857e62b368c59e2c5db5acb6ab25bcc8f74": "c61740eb5fc5eb3f1108d954517f26f3",
".git/objects/ad/697bedc75c6c9f73d07ceec5aa15def18b8536": "df98e0d3d08d25febf683bb7fe9a9323",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/83a0dfbe09af2f304a63adeb74716d5bbc9d56": "522671d21269dcc206718a6006ca29bf",
".git/objects/ae/49141c22c9162d8d260369445da7ac6a51b1f9": "88cfefe6c8957b0a61dcb89b4898156b",
".git/objects/af/3ffc98c3f131583c02d34aed9f6edc1ff43b4e": "fcb872306159033117d13148059cbd21",
".git/objects/b0/5c717d9f651aefa8eb4ffddf25818e35d29c10": "419667027becda7c7f82e44f90ef3e6e",
".git/objects/b2/ebf1527da33a6a0129a46c0654de9d355689f8": "f53d99776b8658dcf002d03e3e81cada",
".git/objects/b4/26727a23c20e3d5a6fff3cc176202b6e093cd1": "b707c2da3a181a8ebcd6fa54123d2a4a",
".git/objects/b5/519116c7f106f02a93077fd3dfd11dfb1b5dea": "74d06d3ed0b0f71d989058768e0fd30a",
".git/objects/b5/8b9e1f59885dabc25b3d03e90b9cdfd595ef6b": "120a07a16d45219d5627056350b22a5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4c0d6bfa0d35ddc93175bef45bcfc9cb5bffdd": "b700859a769fb45e5efa3c01b0bdf664",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cba73c92deec1a6a7b961eac29023f23a3e7f2": "881c62142db33dab73cf653e02f8fec3",
".git/objects/ba/cee4419a4c784ae5b5a84634ff0105183ef3ae": "9de831ab0ec9547c51910781d79765f1",
".git/objects/bf/2cc846d89935cc397f9feb8850ba62c9c0ba78": "60eb83d431749b5180dd9e683470f469",
".git/objects/bf/97a67bb1353f87ba699d4853f6a38cf7efad44": "06a575ac00a7228a7c2a0c87dc2c9b5a",
".git/objects/bf/d382e387bd397a736a436ee8c10d588c206d26": "c1c43f78a4b4ab3a62e045c7667ac952",
".git/objects/c4/3abff5e86bfe73293f93e7a7fded0d4bf5527f": "5189b40272ead460d6bfbbe8bcde4c8a",
".git/objects/c4/7fc445954aab01ca148d005c5fe0d634eacf86": "bcb4ead3999ba4e4cc76388a63c888dc",
".git/objects/c5/7bb5101430f68417ad38a21c1a191fb505f8c0": "ce9c3f9f89f55de6126832d535cf47e0",
".git/objects/c5/e2ac2adb43d6c18842079e2a8459923458e106": "ea5e41eaff46cd4197b1a609354be228",
".git/objects/c7/1679d76a365a33c35af23f145b066cbc427cb8": "b4f94bc874fbbb79628c991e06028d93",
".git/objects/c8/8543e7f8258d1cde5f305e78bab9f1a1e0695b": "4ee21a3c79cf16f3a284acd85556e203",
".git/objects/c8/c1f30ca27f606bba7ddb5e8017e20243625591": "d3b4e5d0fcf31936a87892ba8764894e",
".git/objects/c9/fa5584af96108fa5790e480dad176f9798c388": "9be0b4803db35e197e5239c34ce3f2ce",
".git/objects/cb/0837e2695bd83456eca660b4350d782d31030f": "319c49d2008f82e728bdae627ad57abe",
".git/objects/cb/71a4ac0b9a5e1b62da898596d541f5b69997c0": "6059f1f2002d6d078395674d174b2fbd",
".git/objects/cc/1403acfaa8f123c760a51535be3214402caf93": "dc26a3bda79131e4ae09e3888f804e54",
".git/objects/cc/400aa1587ab6e2691bc2afdc4d75195584691d": "b96559fd81b3b201cac990a28369e02d",
".git/objects/cc/5e0b2e02c1b639433cfec59cbeee4d71b7f5eb": "cf742ac431a06391019d78265bd2f3fd",
".git/objects/d0/398f5abfc3a68e8e6e9ff8c79fdace76934e22": "760d63eb5ec1779469959e4964b842de",
".git/objects/d0/bdda2666946441b60ff569b84eaf75812f6ec7": "5f137d5f7f182abce90022f08c57f165",
".git/objects/d1/c65af47c5f514f6798380ef315235755997e11": "29c30ad5dd86a46bbdbf52d2608eb193",
".git/objects/d1/d491c7fa694b4c2be396cdd8d5c8659af856db": "df8e61f14c08181ad4bf1ac69df39dbd",
".git/objects/d4/e28ce328edc8a8028a6065863db13b4720b34d": "08aa49df4260fd9020f0c71aefc28acc",
".git/objects/d5/b439eb4e6af6ee24b7a8d392a19b7dd89dccb7": "243b14ea827da5373479deb857f5cee3",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/47b351aaf67ae000dbbcc50a8064c6fe9a03fe": "ea907f2934ef48e57122320d141fbd83",
".git/objects/db/dda884973d2af66836cd885b6b3b28b72a4c0d": "4db774c066df8ac5a8b8ad433a553155",
".git/objects/dc/069baadfb8612db4a92f789f9d0a5db4f62748": "2cd3d84e52e6b5187e46d2b6bb18875f",
".git/objects/de/798bbf7a40c0aae3ef72c9ef3446e7240646de": "7e562ec3975da5c54ab33cc4ad440cb9",
".git/objects/e0/a1c2cc5e1f6bb7f45b6b84a525d48c54d5bea7": "8fa51142e43274f3c28c578088f73b13",
".git/objects/e1/554f41654ae64bd1861ba7a3b53a658a11917b": "fe78fa6a6662eafabecbf4401289fe22",
".git/objects/e2/c139526a81bd2060d017c00468d6ad9c1bdee9": "3bdb553bfe4248b76c24973f1b9680d2",
".git/objects/e4/247cc1325d81a34848726ff8b9b44549838cc3": "be204c8de9195113027e2bf57c27a582",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/f0bf5b5552d7a3f963e2f0e515efc330847050": "c90bc2c53d958e74e91015dc5338c0ea",
".git/objects/e9/7c215fcb0fee594775da197192f731541ea00f": "adc211e2f66d9995a05f0fc567b64b30",
".git/objects/ea/2695206aacb1b5997fb4ad6bd565c78c5bb5ad": "3e83725bbd4309d8757d7c9de3f13e61",
".git/objects/ea/4f1ced18a56090b31b730a1f09081440f73c43": "b86e02deb1cea634bdbc42d8a11d400f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6ee0b346ab4fe9ebdcbee3cbc8d02471655f3f": "662e1ecc4228c577d8c55b2380ce5ca4",
".git/objects/ee/8fe838a00ebe344767414c1466bb7175d39ab7": "914ea78023a223fc669df5d06550dae9",
".git/objects/f3/160060ac9047deb65ed5630f0f2d19027743fe": "867c920ad1a2a06578bc8e05752e296d",
".git/objects/f3/835c0b4e403e9a67e92ebd768aceae01a5deb9": "7de93a08266d5763dd717fa3d3a6d78d",
".git/objects/f6/2235889ed63269412ad5092370ca6f96e1c7dc": "e4c2ebf3d1ced7d16a2c2e996ebce796",
".git/objects/f6/280aa9a918a7fa753cd381c32807ea11a3a53f": "cf3073c52586072a54744d672e65a2ad",
".git/objects/fa/614ceafe15290a8a5cee50f9d8d32b3b0ba0bc": "5081a7a79a3875132e9954e1565197cf",
".git/objects/fc/88d84e4162e043641fcdfa06faee207e242c5e": "a6c4b8ed21cf2aa92c19d99a158cf26f",
".git/objects/fd/b5b18d2b37595b8cd65dd097ba97b1301578b0": "a57494d8409d58f76b8d34be815da5f7",
".git/objects/fe/41291803dc7df6651e339f128db2d9de008a45": "e25b2c6fafc68319ff2910421268ee82",
".git/objects/ff/f311bf921a63cc49afaa9c853274508feba5c3": "84ef4cc21339a7e7551e9c3239c41a70",
".git/refs/heads/main": "82b25da2a39ed924c261ff1f9c7ffd68",
".git/refs/remotes/origin/main": "82b25da2a39ed924c261ff1f9c7ffd68",
"assets/AssetManifest.json": "40ee77dd3b0d1489d61e0c8b48d933de",
"assets/assets/fonts/FredokaOne-Regular.ttf": "4a2f2ea45a0bb1abe81b47d0afde4aae",
"assets/assets/fonts/kanit-Regular.ttf": "b935eb6769e902b3b0086459a7c55a05",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Nunito-Regular.ttf": "5f444b61c541a4b329d8b16841b4de96",
"assets/assets/logo/loading-screen-logo.png": "7faee69c965fb7076622f8abe0d8898f",
"assets/assets/logo/loading-screen-logo.svg": "1601d3ec8a08ff796704bcaa8c18a248",
"assets/assets/logo/loading-screen.png": "f0aa33b62b4bb768fc8ddde68d5dc22e",
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
"assets/NOTICES": "bf33d09921c33208ff924e8d3503d933",
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
"index.html": "86c3bb43f27dade338ac1920f87a65d4",
"/": "86c3bb43f27dade338ac1920f87a65d4",
"main.dart.js": "c77b2e79d3dce7bdf81ebfb592ece9e4",
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
