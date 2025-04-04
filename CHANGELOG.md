# Changelog

<a name="unreleased"></a>
## Unreleased

### 🐛 Bug Fixes
- [`d199fe2`](https://github.com/maicol07/material-web-additions/commit/d199fe21cb3e49af9e61986c20d2461b62ffac0f) Fix MD web pre17 BC

### 👷 Building scripts changes
- [`491a6f2`](https://github.com/maicol07/material-web-additions/commit/491a6f2de211c9e358598afed24024430c661246) Update tsconfig.json to exclude certain directories

    Adjusted the TypeScript configuration file to exclude 'node_modules' and 'docs' directories from TypeScript compilation. This is necessary to limit the scope of the TypeScript compiler, improve the compilation speed, and prevent unnecessary issues that can occur when TypeScript attempts to compile the whole project.

### 👷 CI changes
- [`3989607`](https://github.com/maicol07/material-web-additions/commit/39896078dc2790a73d7d3c1eb2a3d039583aaf0c) version bump to 1.4.2
- [`84ad1c2`](https://github.com/maicol07/material-web-additions/commit/84ad1c216735b8b58ae12460141e959cde2a7354) version bump to 1.4.1

### Other changes
- [`688d7ce`](https://github.com/maicol07/material-web-additions/commit/688d7ce186a47dfe2796cc443fbfc61008594346) **deps:** ⬆️ Upgraded dependencies


<a name="1.4.1"></a>
## [1.6.0](https://github.com/maicol07/material-web-additions/compare/v1.5.1...v1.6.0) (2025-04-04)


### Features

* **snackbar:** ✨ Add snackbar component ([fe899b6](https://github.com/maicol07/material-web-additions/commit/fe899b6f528ceef026f4bfeeca6a17dab96ab73e))


### Bug Fixes

* **analyzer:** 🐛 Handle undefined return types ([0b59e72](https://github.com/maicol07/material-web-additions/commit/0b59e72eb49f7b226fbc9db001cc33752a8799cf))
* **analyzer:** 🐛 Use @wc-toolkit/cem-inheritance ([98797e5](https://github.com/maicol07/material-web-additions/commit/98797e5e50d7f49787955e3a7bfb53ed38cdba95))
* **card:** ✏️ Correct typo in stories.ts ([f2cb995](https://github.com/maicol07/material-web-additions/commit/f2cb995be4544b310f6311170151e2614149488f))
* **catalog:** 🐛 Downgrade playground-elements to 0.19.1 ([44b0ab6](https://github.com/maicol07/material-web-additions/commit/44b0ab69b9689d51fa4b7e5ee81a360010407353))
* **catalog:** 📦️ Fix esbuild target for node modules ([cfb75c8](https://github.com/maicol07/material-web-additions/commit/cfb75c82fbc549020258f618c4ce994a1861dbd5))
* **catalog:** Add missing imports for card and data table ([42cfc6c](https://github.com/maicol07/material-web-additions/commit/42cfc6cbb9949d9c8f5cb530d012977b73095554))
* changed checkmark to check in md-icon selected slot ([69c76e9](https://github.com/maicol07/material-web-additions/commit/69c76e933fe643e2c2d580298c11e2e3eb40915c))
* **ssr:** 🐛 Enable SSR for key components ([7e79cf6](https://github.com/maicol07/material-web-additions/commit/7e79cf66dc2129775b05e0526799fa32bf153304))
* upgrade playground-elements from 0.18.1 to 0.19.1 ([40b6178](https://github.com/maicol07/material-web-additions/commit/40b6178375ad4f2cbfd61c13018e3f3f2f70949f))

## [1.5.1](https://github.com/maicol07/material-web-additions/compare/v1.5.0...v1.5.1) (2024-08-14)


### Bug Fixes

* Disable SSR due to issues in production ([604774c](https://github.com/maicol07/material-web-additions/commit/604774c3ca47725cd8c219953cc05fe562a8e306))

## [1.5.0](https://github.com/maicol07/material-web-additions/compare/v1.4.4...v1.5.0) (2024-07-04)


### Features

* ✨ Added web types generation ([ead876f](https://github.com/maicol07/material-web-additions/commit/ead876fe1de6df9a8b72c210e4fb7f9178a02fc1))


### Bug Fixes

* **catalog:** align one liners to center ([92f9ac5](https://github.com/maicol07/material-web-additions/commit/92f9ac505a9cd070a9a84aadfdd83dedecd246b6))
* **catalog:** center items in blockquotes ([04f6057](https://github.com/maicol07/material-web-additions/commit/04f60571258e4b554a088d12f379979c81b59439))

## [1.4.4](https://github.com/maicol07/material-web-additions/compare/v1.4.3...v1.4.4) (2023-11-28)


### Bug Fixes

* Set width for checkbox type in data-table styles ([5169aed](https://github.com/maicol07/material-web-additions/commit/5169aed18e4f3f9356b259151f9ad404f78f2ec1)), closes [#12](https://github.com/maicol07/material-web-additions/issues/12)
* upgrade playground-elements from 0.17.1 to 0.18.1 ([e025c32](https://github.com/maicol07/material-web-additions/commit/e025c32bb758171049314733bcce75194abd1267))

## [1.4.3](https://github.com/maicol07/material-web-additions/compare/1.4.2...v1.4.3) (2023-10-04)


### Bug Fixes

* Elevation may not be shown everytime ([7d36c55](https://github.com/maicol07/material-web-additions/commit/7d36c551aa19b86aeb3afeb8099dd08e2cd43130))
* Fix pagination not showing correct values ([2185a76](https://github.com/maicol07/material-web-additions/commit/2185a763f164cfa2adb700b2f7f8e5bc39262773))
* Fixed typo in card component example ([1899a2d](https://github.com/maicol07/material-web-additions/commit/1899a2dc50e04def884fda896b99d8c773bf1281))
* Outlined showing filled styles ([a7ecf82](https://github.com/maicol07/material-web-additions/commit/a7ecf82e8f7650865c06149f97fc0bc83e55bf66))

## [1.4.1](https://github.com/maicol07/material-web-additions/compare/1.4.0...1.4.1)

> Released on August 17, 2023

### 👷 Building scripts changes
- [`312cb6b`](https://github.com/maicol07/material-web-additions/commit/312cb6ba29de25826c562c9252cb2b5c0e9132a3) Fix compiling issues

### 👷 CI changes
- [`7f6531a`](https://github.com/maicol07/material-web-additions/commit/7f6531a8ef040dbb722c2d6e6f6542b45de91906) version bump to 1.4.0


<a name="1.4.0"></a>
## [1.4.0](https://github.com/maicol07/material-web-additions/compare/1.3.7...1.4.0)

> Released on August 17, 2023

### 🐛 Bug Fixes
- [`6e17b29`](https://github.com/maicol07/material-web-additions/commit/6e17b29955f7969f31fa6ab9927fcd72ec99a7e3) Fix MD web pre15 BC
- [`a6d1e44`](https://github.com/maicol07/material-web-additions/commit/a6d1e441ec430cf1ff225765d0d2dc15cad176ec) **data-table:** Pagination buttons are enabled in rare cases
- [`6b8ad3c`](https://github.com/maicol07/material-web-additions/commit/6b8ad3c3f45bde033e365cf418754507a8dc768d) **data-table:** Fix pagination not displaying any rows if `currentFirstRow` is < 1
- [`3b176cd`](https://github.com/maicol07/material-web-additions/commit/3b176cdf7650073ce2d47678dfe634b915ac0047) **docs:** Data table stories parameters not working

### ♻ Code Refactoring
- [`6c68489`](https://github.com/maicol07/material-web-additions/commit/6c684892f73c28120800eb65bb74136f7f29135a) **data-table:** ♻️ Renamed local variables

### 👷 CI changes
- [`d29ac25`](https://github.com/maicol07/material-web-additions/commit/d29ac2568e38d03ec755240680a8ef21b944ace0) version bump to 1.3.7

### Other changes
- [`67b2001`](https://github.com/maicol07/material-web-additions/commit/67b2001e88ed288aeef60eea31ba7b946ac54542) PHPStorm metadata
- [`46687e7`](https://github.com/maicol07/material-web-additions/commit/46687e779114b559bfda57ac186d6c143b5810e0) **deps:** ⬆️ Upgraded dependencies


<a name="1.3.7"></a>
## [1.3.7](https://github.com/maicol07/material-web-additions/compare/1.3.6...1.3.7)

> Released on August 10, 2023

### 🎨 Code styling
- [`587abdc`](https://github.com/maicol07/material-web-additions/commit/587abdc18e094d170cfd08a7959254d81c0364ee) Fix text fields and select spacing

### 👷 CI changes
- [`e2a9e7f`](https://github.com/maicol07/material-web-additions/commit/e2a9e7f18c769720f54e597a8bdd470783a8f1fd) Fix autoinstallpeers setting
- [`947d95d`](https://github.com/maicol07/material-web-additions/commit/947d95d6761440e65a50067a0c3c22ba04483140) version bump to 1.3.6

### Other changes
- [`092fb78`](https://github.com/maicol07/material-web-additions/commit/092fb7813d0113783f2e9e9c40ab786ad0e0aff7) PHPStorm metadata
- [`4a0a5a7`](https://github.com/maicol07/material-web-additions/commit/4a0a5a719ffdc071c502701b45795401ea2b613a) **deps:** ⬆️ Upgraded dependencies


<a name="1.3.6"></a>
## [1.3.6](https://github.com/maicol07/material-web-additions/compare/1.3.5...1.3.6)

> Released on July 31, 2023

### 🐛 Bug Fixes
- [`9dfe127`](https://github.com/maicol07/material-web-additions/commit/9dfe127aab7e747c601cd88a59c858e1316e1a54) 👽 Material web pre14 breaking changes

### 👷 CI changes
- [`a6bc8d9`](https://github.com/maicol07/material-web-additions/commit/a6bc8d966ecae2c3af07ba55fad6f11cc51e3f0d) version bump to 1.3.5

### Other changes
- [`e178ae3`](https://github.com/maicol07/material-web-additions/commit/e178ae3d55a13c81cf64f1a80890868103d36786) **deps:** ⬆️ Upgraded dependencies


<a name="1.3.5"></a>
## [1.3.5](https://github.com/maicol07/material-web-additions/compare/1.3.4...1.3.5)

> Released on July 13, 2023

### 👷 CI changes
- [`c13590d`](https://github.com/maicol07/material-web-additions/commit/c13590df596b885dda065cc5be48a9e4b7643fc7) version bump to 1.3.4

### Other changes
- [`de99fab`](https://github.com/maicol07/material-web-additions/commit/de99fab61ef6bb2f556831f1fb390131577ae7cf) **deps:** ⬆️ Upgraded dependencies


<a name="1.3.4"></a>
## [1.3.4](https://github.com/maicol07/material-web-additions/compare/1.3.3...1.3.4)

> Released on July 11, 2023

### 🐛 Bug Fixes
- [`1f376fb`](https://github.com/maicol07/material-web-additions/commit/1f376fbe54a6c4c59a1c43135ecb057f78700fe1) **data-table:** Current last row not showing when totalRows was more than displayed table rows

### 👷 CI changes
- [`662707b`](https://github.com/maicol07/material-web-additions/commit/662707be41f59d24ce648230bf38f5ed7cfda0d1) version bump to 1.3.3


<a name="1.3.3"></a>
## [1.3.3](https://github.com/maicol07/material-web-additions/compare/1.3.2...1.3.3)

> Released on July 11, 2023

### ✨ Features
- [`f874fdd`](https://github.com/maicol07/material-web-additions/commit/f874fdd314fd5ca0dd297a50ef89d2a1cdf21566) ✨ Added totalRows attribute

### 👷 CI changes
- [`54c494c`](https://github.com/maicol07/material-web-additions/commit/54c494ca44c58dcd08442c8cc4120fdb303e4c04) version bump to 1.3.2


<a name="1.3.2"></a>
## [1.3.2](https://github.com/maicol07/material-web-additions/compare/1.3.1...1.3.2)

> Released on July 11, 2023

### ✨ Features
- [`7c67b84`](https://github.com/maicol07/material-web-additions/commit/7c67b843c5489e109317a8a63f139afddc5b0c16) ✨ Added action parameter to the `paginate` event detail

### 👷 CI changes
- [`49f8062`](https://github.com/maicol07/material-web-additions/commit/49f80625bf357f5fae37fa0234504a126bcdf1cd) version bump to 1.3.1

### Other changes
- [`7173cea`](https://github.com/maicol07/material-web-additions/commit/7173ceadcb3b1f753d901967e3fbe223eef5f15f) Re-enabled autoInstallPeers
- [`8173c7b`](https://github.com/maicol07/material-web-additions/commit/8173c7ba9b4c17861af19260179196fd5fe34bf4) Added ide scope


<a name="1.3.1"></a>
## [1.3.1](https://github.com/maicol07/material-web-additions/compare/1.3.0...1.3.1)

> Released on July 10, 2023

### ✨ Features
- [`38d8a8c`](https://github.com/maicol07/material-web-additions/commit/38d8a8c6763b885c6061914245256acddaf45634) **data-table:** ✨ Added custom pagination

### 📝 Docs changes
- [`9b78523`](https://github.com/maicol07/material-web-additions/commit/9b7852390505d88d78a0f0ef2d02738dae40ca02) **data-table:** 📝 Updated custom logic docs

### 👷 CI changes
- [`3d31784`](https://github.com/maicol07/material-web-additions/commit/3d31784ec6f194e1dff7113bee1c6f66c0a210dd) 💚 Added no changelog setting
- [`6ea2c0f`](https://github.com/maicol07/material-web-additions/commit/6ea2c0f7e4d8d03335db4600486816e146ce185c) version bump to 1.3.0

### Other changes
- [`a06036a`](https://github.com/maicol07/material-web-additions/commit/a06036a7a03a208f90858758321ff59a87560c5d) Added removed tokens from Material web
- [`04909da`](https://github.com/maicol07/material-web-additions/commit/04909dacbb29880f120bbc742c58f5b33bf8a40f) **deps:** ⬆️ Updated dependencies


<a name="1.3.0"></a>
## [1.3.0](https://github.com/maicol07/material-web-additions/compare/1.2.17...1.3.0)

> Released on July 10, 2023

### ✨ Features
- [`ca5b38e`](https://github.com/maicol07/material-web-additions/commit/ca5b38ea60838db37d1ecf0f49b4d4224e91ce80) **data-table:** ✨ Added some events to pagination actions

### ♻ Code Refactoring
- [`2dc15ae`](https://github.com/maicol07/material-web-additions/commit/2dc15aeb5286cefa824ea793830876911bcc1979) **data-table:** ♻️ Code reformat and refactor

### 🎨 Code styling
- [`0061893`](https://github.com/maicol07/material-web-additions/commit/0061893ad3d9b01ab6a68358db92ca9bb9ff27f9) **data-table:** Fix minor graphic issues with dark theme

### 👷 CI changes
- [`edd6df6`](https://github.com/maicol07/material-web-additions/commit/edd6df6c420e650dbca9b8ea01040514573997ad) version bump to 1.2.17


<a name="1.2.17"></a>
## [1.2.17](https://github.com/maicol07/material-web-additions/compare/1.2.16...1.2.17)

> Released on July 02, 2023

### 📝 Docs changes
- [`38e0e23`](https://github.com/maicol07/material-web-additions/commit/38e0e234b12b1d31211970aa71995992b4781a49) Fix Github links not working
- [`6614dd6`](https://github.com/maicol07/material-web-additions/commit/6614dd68342001347a4a78a1d8f5910a6f0fb56b) Fix icons not loading

### 👷 CI changes
- [`5bf0503`](https://github.com/maicol07/material-web-additions/commit/5bf050318037f28c42350e6a2a6c946e4d6ea6d0) Added missing secrets inheritance
- [`afa20ec`](https://github.com/maicol07/material-web-additions/commit/afa20ec550deed90bffd8c8d0acc65c7490577ca) version bump to 1.2.16

### Other changes
- [`f530b84`](https://github.com/maicol07/material-web-additions/commit/f530b845f1d6c8882d939998f7bffa3676197241) **deps:** ⬆️ Updated dependencies


<a name="1.2.16"></a>
## [1.2.16](https://github.com/maicol07/material-web-additions/compare/1.2.15...1.2.16)

> Released on June 21, 2023

### 🐛 Bug Fixes
- [`5aad44d`](https://github.com/maicol07/material-web-additions/commit/5aad44d107a3b02a47743c0a9677037e5dbd267b) 🐛 Fix MD web pre11 breaking changes

### ♻ Code Refactoring
- [`912bf60`](https://github.com/maicol07/material-web-additions/commit/912bf60e6cd34d416bbb5cbb40e5936f31c5a868) ♻️ Code refactor

### 🎨 Code styling
- [`7043e9f`](https://github.com/maicol07/material-web-additions/commit/7043e9f7b075bd361d5331671f7edf8bf8f87f7d) **card:** Improved focus ring

### 👷 CI changes
- [`a1e0fba`](https://github.com/maicol07/material-web-additions/commit/a1e0fba0de91d5be39d0a78187b08cc4b44c9b44) 💚 Fix chromatic workflow not starting after automated release
- [`606ce7e`](https://github.com/maicol07/material-web-additions/commit/606ce7e704ed70207441d598067310311d6a0ff6) version bump to 1.2.15

### Other changes
- [`0f6c85a`](https://github.com/maicol07/material-web-additions/commit/0f6c85aef18cc57fed29e4406bd4145b194aae94) **deps:** ⬆️ Updated dependencies


<a name="1.2.15"></a>
## [1.2.15](https://github.com/maicol07/material-web-additions/compare/1.2.14...1.2.15)

> Released on June 06, 2023

### 🐛 Bug Fixes
- [`ceb2ccb`](https://github.com/maicol07/material-web-additions/commit/ceb2ccb183027967f340b4cba83aee5a5741938d) 🐛 Fix MD web pre10 breaking changes

### 👷 CI changes
- [`f097906`](https://github.com/maicol07/material-web-additions/commit/f0979065d21d6091da4ad8494a0a04e540dc3c58) version bump to 1.2.14

### Other changes
- [`67c1b14`](https://github.com/maicol07/material-web-additions/commit/67c1b141efbb254e9fda78cde6a5a740d4d97f57) **deps:** ⬆️ Updated dependencies
- [`aa66e5e`](https://github.com/maicol07/material-web-additions/commit/aa66e5e6e8f351ccf144dfd33a5613494395ebaa) **deps:** ⬆️ Updated dependencies


<a name="1.2.14"></a>
## [1.2.14](https://github.com/maicol07/material-web-additions/compare/1.2.13...1.2.14)

> Released on May 11, 2023

### 🐛 Bug Fixes
- [`8f1d9a9`](https://github.com/maicol07/material-web-additions/commit/8f1d9a9fb72d3bb26d6fa9f4dc0ff62f9a744c99) **card:** Fix compatibility with M3 pre8

### 👷 CI changes
- [`760d7b0`](https://github.com/maicol07/material-web-additions/commit/760d7b08a834b63bfa12f5ea01bb370f7aee909b) Updated chromatic workflow triggers
- [`3ef2206`](https://github.com/maicol07/material-web-additions/commit/3ef2206e00a4e3481688cc25ca0e266b080fe06a) version bump to 1.2.13

### Other changes
- [`8bbe8bf`](https://github.com/maicol07/material-web-additions/commit/8bbe8bf30ee926acaba7ee0a2223a8fa24081eb2) 🔧 Removed `skipLibCheck`
- [`eeba48f`](https://github.com/maicol07/material-web-additions/commit/eeba48fb4ed1696c57d73d5041f998ba37d155cc) **deps:** ⬆️ Upgraded dependencies


<a name="1.2.13"></a>
## [1.2.13](https://github.com/maicol07/material-web-additions/compare/1.2.12...1.2.13)

> Released on May 06, 2023

### 🐛 Bug Fixes
- [`ee74892`](https://github.com/maicol07/material-web-additions/commit/ee74892f3b59ef84b4d7584fed66ba5a92c8ef73) **layout-grid:** 🏷️ Fix types

### 👷 CI changes
- [`652a4d8`](https://github.com/maicol07/material-web-additions/commit/652a4d8c963ccf9607e4dfde6a800db110448b06) Refactored workflow
- [`c223a3f`](https://github.com/maicol07/material-web-additions/commit/c223a3f563dd301c63f87865382857b5911cc8f1) 💚 Fix workflow events
- [`1d2bcf3`](https://github.com/maicol07/material-web-additions/commit/1d2bcf3ec67b6c7c5c1800c9e7572c4fc2eb5013) version bump to 1.2.12

### Other changes
- [`81fed86`](https://github.com/maicol07/material-web-additions/commit/81fed86d7c27094310cfe05dfafc9a7893984b40) **deps:** ⬆️ Upgraded dependencies
- [`8cf255e`](https://github.com/maicol07/material-web-additions/commit/8cf255e3379476c0452328903651e18433afff5d) **deps:** ➕ Added web types

    Lit autocompletion on Webstorm/PHPStorm


<a name="1.2.12"></a>
## [1.2.12](https://github.com/maicol07/material-web-additions/compare/1.2.11...1.2.12)

> Released on April 25, 2023

### ✨ Features
- [`84aa55d`](https://github.com/maicol07/material-web-additions/commit/84aa55d0278f5043d1b2d3c849edab113f34b62d) **data-table:** ✨ Replaced pagination text field with select

### 🐛 Bug Fixes
- [`3eeeac5`](https://github.com/maicol07/material-web-additions/commit/3eeeac58a0385ddce91799684d61e5fe6f6ce5e2) Breaking changes from latest M3 pre

### 📝 Docs changes
- [`f7ce91a`](https://github.com/maicol07/material-web-additions/commit/f7ce91aaf70725c67b0e92ebebbc43676cd1f163) **data-table:** 📝 Removed line from README

### 👷 CI changes
- [`a3bdf77`](https://github.com/maicol07/material-web-additions/commit/a3bdf774861465c249021c419cafebc8ca8a8dcc) Use release action v1
- [`6d857bc`](https://github.com/maicol07/material-web-additions/commit/6d857bc7e3a087f0b30eeae11c529b76f3613df5) Run action only on release
- [`0716522`](https://github.com/maicol07/material-web-additions/commit/071652292a127e24f71a770ada0988419bad5f31) version bump to 1.2.11

### Other changes
- [`fa84c1d`](https://github.com/maicol07/material-web-additions/commit/fa84c1dd3e041c832bce53aed8f5c3b878011c5c) **data-table:** Replaced M2 linear progress with M3 one
- [`8528a60`](https://github.com/maicol07/material-web-additions/commit/8528a602351d4bcac91d6d33e7450f1b1632cfcb) **deps:** ⬆️ Upgraded dependencies


<a name="1.2.11"></a>
## [1.2.11](https://github.com/maicol07/material-web-additions/compare/1.2.10...1.2.11)

> Released on April 20, 2023

### 🐛 Bug Fixes
- [`b37810b`](https://github.com/maicol07/material-web-additions/commit/b37810bc5caaaf15772e76d0a485697ea8fb5acc) **data-table:** ✏️ Typo in property name

### 👷 CI changes
- [`1f67252`](https://github.com/maicol07/material-web-additions/commit/1f672529ec003949497b5b014b124c792297cd17) Use new release workflow
- [`1340eaf`](https://github.com/maicol07/material-web-additions/commit/1340eaf215f7108b80706171af8f8849d2b6d1c9) version bump to 1.2.10

### Other changes
- [`9973964`](https://github.com/maicol07/material-web-additions/commit/997396471114267fef098d12ff360d4e3c45cafa) **deps:** ⬆️ Upgraded dependencies


<a name="1.2.10"></a>
## [1.2.10](https://github.com/maicol07/material-web-additions/compare/1.2.9...1.2.10)

> Released on April 19, 2023

### 🐛 Bug Fixes
- [`f507435`](https://github.com/maicol07/material-web-additions/commit/f50743554ff47e441f3fcc2ddd82e716894efefa) **data-table:** Don't propagate click event on textfield

    This will stop showing the filter button when clicking on the filter textfield

### ♻ Code Refactoring
- [`70c8b6d`](https://github.com/maicol07/material-web-additions/commit/70c8b6dc7251217aef6a2dab26ea78e9ba6f696a) **data-table:** 💄 Aligned styles with latest M3 tokens
- [`6beb686`](https://github.com/maicol07/material-web-additions/commit/6beb686d66837d920c5f5858e97dbf8cc751772e) **data-table:** ⚰ Removed unused styles
- [`e7a00df`](https://github.com/maicol07/material-web-additions/commit/e7a00dfb5e140fd13e7acd62d07f0e4655f4901b) **data-table:** 🚚 Move cell styles into its own private file

### 👷 CI changes
- [`513d6b3`](https://github.com/maicol07/material-web-additions/commit/513d6b369298e553d567e97f87fe7d7013a28731) version bump to 1.2.9


<a name="1.2.9"></a>
## [1.2.9](https://github.com/maicol07/material-web-additions/compare/1.2.7...1.2.9)

> Released on April 19, 2023

### ⚡ Performance Improvements
- [`2623d3f`](https://github.com/maicol07/material-web-additions/commit/2623d3f2ec2060641de8c249f4750b38e38f5389) **data-table:** Improved row update when new cells are added

### 👷 CI changes
- [`4cb485e`](https://github.com/maicol07/material-web-additions/commit/4cb485ecf7b28a8a6c8a1cc695743a12e97b84f6) version bump to 1.2.8
- [`711ee89`](https://github.com/maicol07/material-web-additions/commit/711ee89625418ccbc4993dfe46150a13ba2aaaf3) version bump to 1.2.9
- [`8830893`](https://github.com/maicol07/material-web-additions/commit/88308931ac7b86e81633a2da01fbef99ce45d633) version bump to 1.2.8
- [`a6321a4`](https://github.com/maicol07/material-web-additions/commit/a6321a4f4006d81ee438d9b32e54e677258d9eba) Removed autodetect from release workflow
- [`f130721`](https://github.com/maicol07/material-web-additions/commit/f13072136263c1cec94e823c0f817525f3b26afe) Removed changelog action from release workflow
- [`95a8433`](https://github.com/maicol07/material-web-additions/commit/95a84339bb28d09a3e4f17bb7cadeb3d526ae0ff) Removed changelog action from release workflow
- [`25ab2a0`](https://github.com/maicol07/material-web-additions/commit/25ab2a076d2db4be09a278e797f383f618e7c9ae) Added autodetect option

### ⏪ Reverts

- [`62502f4`](https://github.com/maicol07/material-web-additions/commit/62502f42bfccfb8ccda04c28dc0dc4d6e73eebe5) ci: version bump to 1.2.8

      This reverts commit 88308931ac7b86e81633a2da01fbef99ce45d633.
- [`fc5b4f0`](https://github.com/maicol07/material-web-additions/commit/fc5b4f0db0e184d24e844d8188f233f60bff003f) ci: version bump to 1.2.9

      This reverts commit 711ee89625418ccbc4993dfe46150a13ba2aaaf3.


<a name="1.2.7"></a>
## [1.2.7](https://github.com/maicol07/material-web-additions/compare/1.2.6...1.2.7)

> Released on April 18, 2023

### 🐛 Bug Fixes
- [`4be3c17`](https://github.com/maicol07/material-web-additions/commit/4be3c170ca5fc5bfc518acae5947059a6d409535) **data-table:** Wait cells initialization if they didn't update

### 👷 CI changes
- [`3bfb953`](https://github.com/maicol07/material-web-additions/commit/3bfb95340e457507c497c7d1bb6e5523437272e8) version bump to 1.2.7


<a name="1.2.6"></a>
## [1.2.6](https://github.com/maicol07/material-web-additions/compare/1.2.5...1.2.6)

> Released on April 18, 2023

### 🐛 Bug Fixes
- [`4a25410`](https://github.com/maicol07/material-web-additions/commit/4a25410916b95ff30149eb362563d9cdc5feeac1) Row doesn't chnge state when using view frameworks

### 👷 CI changes
- [`800b4b9`](https://github.com/maicol07/material-web-additions/commit/800b4b9e1d0ba14e8cdef97b0d79ada88ddf1aae) version bump to 1.2.6
- [`417cc1b`](https://github.com/maicol07/material-web-additions/commit/417cc1ba3457c53d7c9e7bc2860490e6cd476d45) 💚 Fix secrets hidden from workflow


<a name="1.2.5"></a>
## [1.2.5](https://github.com/maicol07/material-web-additions/compare/1.2.4...1.2.5)

> Released on April 17, 2023

### 🐛 Bug Fixes
- [`e383c8d`](https://github.com/maicol07/material-web-additions/commit/e383c8d08e47e0e6ba8b2818a977c91d0f78c41f) **data-table:** Removed inner container

### 📝 Docs changes
- [`6fbd02f`](https://github.com/maicol07/material-web-additions/commit/6fbd02f7446b8b6e3a12dd4d9016a3c34527cc40) **data-table:** 📝 Updated data table footer example

### 👷 CI changes
- [`849bd06`](https://github.com/maicol07/material-web-additions/commit/849bd066316c12477085542586e8e758d6ee3abf) version bump to 1.2.5


<a name="1.2.4"></a>
## [1.2.4](https://github.com/maicol07/material-web-additions/compare/1.2.3...1.2.4)

> Released on April 17, 2023

### 🐛 Bug Fixes
- [`c347abe`](https://github.com/maicol07/material-web-additions/commit/c347abeb5d69762716fe23360f770677d725649f) **data-table:** Footer inheriting column
- [`0d7e0e9`](https://github.com/maicol07/material-web-additions/commit/0d7e0e984593f886a26eaeb71f41c3c2bd4fcdfd) **data-table:** ✏️ Fix typo

### 📝 Docs changes
- [`d3e15e6`](https://github.com/maicol07/material-web-additions/commit/d3e15e65e339e10ca6735e1ef0d35773227eb28b) Fixed card link
- [`bbedab3`](https://github.com/maicol07/material-web-additions/commit/bbedab315f6cab43fb0b6c24d23f23abcc9244a3) **data-table:** Added basic footer example

### 👷 CI changes
- [`0830bad`](https://github.com/maicol07/material-web-additions/commit/0830bad2259768b10f9136d1565be799f82b5fa1) version bump to 1.2.4
- [`653cfb6`](https://github.com/maicol07/material-web-additions/commit/653cfb69ce51efc0a59417bc103ed834281bd7e4) 💚 Fix workflows
- [`4db946a`](https://github.com/maicol07/material-web-additions/commit/4db946a2d50d13d1fe71e9e152b0a29a295a1cf6) 👷 Updated workflows


<a name="1.2.3"></a>
## [1.2.3](https://github.com/maicol07/material-web-additions/compare/1.2.2...1.2.3)

> Released on April 15, 2023

### 🐛 Bug Fixes
- [`2f0f18e`](https://github.com/maicol07/material-web-additions/commit/2f0f18ed1dcacf998e077cf702f212779199d332) **data-table:** Added reflection to some attributes to apply styles correctly
- [`b74eef4`](https://github.com/maicol07/material-web-additions/commit/b74eef4ebe07d7ba5c5e17f929ac40ec88556983) **data-table:** Fix sort button not disappearing when clicking on a column when manually setting the `sortable` property

### 🎨 Code styling
- [`a4ee3bd`](https://github.com/maicol07/material-web-additions/commit/a4ee3bdc88766f4ec98416944d86b2a6f51fe7f5) **data-table:** 💄 Fix data table checkbox layout

### 👷 CI changes
- [`537a2d5`](https://github.com/maicol07/material-web-additions/commit/537a2d58989714e363bbb821f246c70073dbd734) version bump to 1.2.3
- [`fc00e72`](https://github.com/maicol07/material-web-additions/commit/fc00e728b8aeb024348138791d5555a1572ac315) ✏️ Fix typo


<a name="1.2.2"></a>
## [1.2.2](https://github.com/maicol07/material-web-additions/compare/1.2.1...1.2.2)

> Released on April 13, 2023

### 🐛 Bug Fixes
- [`3eb577d`](https://github.com/maicol07/material-web-additions/commit/3eb577d2bf0371a867b4e769ab43ea63cde3909b) **data-table:** Fix sort button not disappearing when clicking on a column

### 🎨 Code styling
- [`6e49d8e`](https://github.com/maicol07/material-web-additions/commit/6e49d8e363c0ad39f8d411cf2c9699a457a65ea1) **data-table:** 💄 Fix footer/pagination border

### 👷 CI changes
- [`ec287a8`](https://github.com/maicol07/material-web-additions/commit/ec287a8a3b74046322667061fcc719dce581bdec) version bump to 1.2.2
- [`12b958b`](https://github.com/maicol07/material-web-additions/commit/12b958be340936fc84f2c4b4b6121d61b146acd2) Fixed newTag from version_bump step

### Other changes
- [`ab82688`](https://github.com/maicol07/material-web-additions/commit/ab82688f33e6f175ae5f95b1ce4cb33aaa28aa32) **deps:** ⬆️ Upgraded dependencies


<a name="1.2.1"></a>
## [1.2.1](https://github.com/maicol07/material-web-additions/compare/1.2.0...1.2.1)

> Released on April 13, 2023

### 🐛 Bug Fixes
- [`c802ac7`](https://github.com/maicol07/material-web-additions/commit/c802ac7590265864cffef410fbc7a1059177a45b) **data-table:** Fixed filter textfield and sort button layout when used together

### 🎨 Code styling
- [`3929c23`](https://github.com/maicol07/material-web-additions/commit/3929c23aec36b3b625c7289cf695539153d8dc23) **data-table:** 💄 Use M3 header cell border
- [`c673be1`](https://github.com/maicol07/material-web-additions/commit/c673be1488a144214e08c335f7a9748a959f9ea7) **data-table:** 💄 Fix cells borders

### 👷 CI changes
- [`5d20e79`](https://github.com/maicol07/material-web-additions/commit/5d20e796166a465df7f1dc8d86221ac9b42a2f37) version bump to 1.2.1
- [`a52239d`](https://github.com/maicol07/material-web-additions/commit/a52239dd2e375b2cc7aedca186a40a5357dde6a5) Improve changelog commit & push
- [`123cc73`](https://github.com/maicol07/material-web-additions/commit/123cc733d6171ca6549370aa5b1d4af08f562a93) Fix version bump commit
- [`4ea6415`](https://github.com/maicol07/material-web-additions/commit/4ea6415dda5e8e91016b3de219049330b4ac4c2c) Removed duplicated release
- [`4f14ac5`](https://github.com/maicol07/material-web-additions/commit/4f14ac5ce843e1e796a4d515fc46286562befefc) Fix changelog generation
- [`7195927`](https://github.com/maicol07/material-web-additions/commit/7195927d7ec005d5f7b40769f9f7899bd37a95f0) Added release generation
- [`3d239ce`](https://github.com/maicol07/material-web-additions/commit/3d239ce59175ec9b0e0b60b8779075b0cfa393bf) Improved changelog action
- [`e5e0ce0`](https://github.com/maicol07/material-web-additions/commit/e5e0ce0f33d1e6ebd05c6b069c79d6056d569a3f) Run release job sequentially


<a name="1.2.0"></a>
## [1.2.0](https://github.com/maicol07/material-web-additions/compare/1.1.8...1.2.0)

> Released on April 11, 2023

### ✨ Features
- [`21646a5`](https://github.com/maicol07/material-web-additions/commit/21646a5807dd1e3457acbf5138a07dfb81b6835c) **data-table:** Added custom filtering and sorting

### 🐛 Bug Fixes
- [`ba64e34`](https://github.com/maicol07/material-web-additions/commit/ba64e34749ca6c8858546933c2ea31dfbf49420f) Fix Material Web pre6 breaking changes

### 📝 Docs changes
- [`6cf2e1c`](https://github.com/maicol07/material-web-additions/commit/6cf2e1c4ccd192877f64b916cb5ae79493121727) 📝 Re-added documented CSS props

### 👷 CI changes
- [`ca64428`](https://github.com/maicol07/material-web-additions/commit/ca6442816500f34a1d0c315c4c3f1e5913885563) version bump to 1.2.0
- [`3acd619`](https://github.com/maicol07/material-web-additions/commit/3acd6197d30550aaf96da4e55eb5d6d757a6b89d) Fix action schema
- [`9c824de`](https://github.com/maicol07/material-web-additions/commit/9c824de1935cf4554d1fa1d20eeafbbd9e0ef8cb) Fix actions
- [`2c88937`](https://github.com/maicol07/material-web-additions/commit/2c88937a046213c77f2c8bfdce99ad5f724aeeb2) Change version type select items order
- [`2205129`](https://github.com/maicol07/material-web-additions/commit/22051299e69baf96bcee895e9990f6bf3ee6e029) 👷 Fixed overridden `GITHUB_TOKEN` secret
- [`4b04bd8`](https://github.com/maicol07/material-web-additions/commit/4b04bd8553011b6588fcd33eaba50e5683b4b4b7) 👷 Fixed release workflow
- [`1d637c9`](https://github.com/maicol07/material-web-additions/commit/1d637c9eaf1faf4fd5e3d657b8fcba5726556ba4) 👷 Added release workflow

### Other changes
- [`a31b8c5`](https://github.com/maicol07/material-web-additions/commit/a31b8c5cca2c7df9dfa26a4e7ed85f9ac962330e) **deps:** Enforce pre6 as minimum required version of `[@material](:/material)/web`
- [`6810469`](https://github.com/maicol07/material-web-additions/commit/68104691bdfa20caee9d8f24447eb1a38bc5be54) **deps:** ⬆️ Upgraded dependencies


<a name="1.1.8"></a>
## [1.1.8](https://github.com/maicol07/material-web-additions/compare/1.1.7...1.1.8)

> Released on March 29, 2023

### 🐛 Bug Fixes
- [`a936117`](https://github.com/maicol07/material-web-additions/commit/a93611767f3465035b4daf1980fdaf8356c33ad0) **data-table:** Colors when using dark theme

### Other changes
- [`8466725`](https://github.com/maicol07/material-web-additions/commit/8466725458a265bc81a7eb33bf92833c6a84d6ee) Bump package version
- [`4b91326`](https://github.com/maicol07/material-web-additions/commit/4b91326014bc891b74f4253dbaba3093614fb1ed) **deps:** ⬆️ Upgraded dependencies


<a name="1.1.7"></a>
## [1.1.7](https://github.com/maicol07/material-web-additions/compare/1.1.6...1.1.7)

> Released on March 28, 2023

### 🐛 Bug Fixes
- [`34f11d5`](https://github.com/maicol07/material-web-additions/commit/34f11d5fdf7f285de8ae90723857cf08873f6930) Fix Material Web pre5 breaking changes

### 📝 Docs changes
- [`cc2c165`](https://github.com/maicol07/material-web-additions/commit/cc2c165a950c5d04d5590d9a580961f1b27cea8d) 📝 Layout fix
- [`4783a63`](https://github.com/maicol07/material-web-additions/commit/4783a63b21aace323426a0720a8e5d35aab51f8a) 📝 Changed sandbox tab order so that Controls is the first one

### Other changes
- [`e3b4f13`](https://github.com/maicol07/material-web-additions/commit/e3b4f1326e113a3fcb643cb3419b0f47dd421a0c) Bump package version
- [`3fba4fc`](https://github.com/maicol07/material-web-additions/commit/3fba4fc3c45a4d4a204fe2f2d142eea86bcbe93a) **deps:** ⬆️ Upgraded dependencies
- [`d502a55`](https://github.com/maicol07/material-web-additions/commit/d502a55f18833a11f5c27db0b2933029c111e92a) **ide:** IDE files


<a name="1.1.6"></a>
## [1.1.6](https://github.com/maicol07/material-web-additions/compare/1.1.4...1.1.6)

> Released on March 21, 2023

### 🐛 Bug Fixes
- [`129ffb4`](https://github.com/maicol07/material-web-additions/commit/129ffb49904735421a467d9cfe2e2fbcf6e24ac7) 🐛 Double progress bar


<a name="1.1.4"></a>
## [1.1.4](https://github.com/maicol07/material-web-additions/compare/1.1.3...1.1.4)

> Released on March 17, 2023

### ♻ Code Refactoring
- [`7761ab4`](https://github.com/maicol07/material-web-additions/commit/7761ab47d880979de2404432e69275c0a495a29e) **data-table:** ♻️ Code refactor

### 🎨 Code styling
- [`7a43b9a`](https://github.com/maicol07/material-web-additions/commit/7a43b9a8d96140002da6278edd0f5f29554762cf) **data-table:** 💄 Improved text presentation in footer
- [`5e76e7d`](https://github.com/maicol07/material-web-additions/commit/5e76e7d2a27406cd05e13271b74de57beb6f05e2) **data-table:** 💄 Fix border radius


<a name="1.1.3"></a>
## [1.1.3](https://github.com/maicol07/material-web-additions/compare/1.1.2...1.1.3)

> Released on March 16, 2023

### 🐛 Bug Fixes
- [`4dd2291`](https://github.com/maicol07/material-web-additions/commit/4dd2291256578002de04795fb893bd922a2aeb93) 🐛 Fix slots throwing an error when instantiating data table components.


<a name="1.1.2"></a>
## [1.1.2](https://github.com/maicol07/material-web-additions/compare/1.1.1...1.1.2)

> Released on March 15, 2023

### 🐛 Bug Fixes
- [`c2635af`](https://github.com/maicol07/material-web-additions/commit/c2635afe5786fdeb5cc69781fce1ef41010493da) 🐛 Fix ripple due to new Material Web ripple implementation

### 📝 Docs changes
- [`5e06528`](https://github.com/maicol07/material-web-additions/commit/5e06528d5eb81e326e95b6c683f58c3d01b0b330) Moved some global CSS to preview
- [`8125e4b`](https://github.com/maicol07/material-web-additions/commit/8125e4b9fa89ae21a55b1164466db47f7150f9ff) 🚚 Moved docs to docs folder
- [`a6b8cd3`](https://github.com/maicol07/material-web-additions/commit/a6b8cd3f5eeef7672aca7103205dbe8f2779cd9f) Fix deprecations
- [`ba3ec8a`](https://github.com/maicol07/material-web-additions/commit/ba3ec8a8226cc65b2dd07add22acf33c6acf4132) 📝 Updated introduction and readme
- [`27ea2a6`](https://github.com/maicol07/material-web-additions/commit/27ea2a68fe53ce1bb8042022924125ee301e8953) Use `md-icon` and Material Symbols
- [`c94b15c`](https://github.com/maicol07/material-web-additions/commit/c94b15c5601d8164099b9de201828b21a0a6e7a5) Removing duplicated links addon
- [`9791e02`](https://github.com/maicol07/material-web-additions/commit/9791e02658663ee09808cb70af724bcd649a02b3) 💄 Use code instead of class
- [`ae2fbaa`](https://github.com/maicol07/material-web-additions/commit/ae2fbaa4ee74e461da0893438085499e4a09d3b7) Replaced essentials plugin collection with singular plugins
- [`8e60e65`](https://github.com/maicol07/material-web-additions/commit/8e60e656e3b6d15c9854930337717ba53e05cf25) Removed what's new plugin
- [`8ad0eaf`](https://github.com/maicol07/material-web-additions/commit/8ad0eafe8ddf0d2ec44042551418d2e447003a23) Added support for GFM tables
- [`7270fe0`](https://github.com/maicol07/material-web-additions/commit/7270fe0c46028560bc34280abc541ade60cafb73) 🐛 Fix markdown imports

### Other changes
- [`4f1a28d`](https://github.com/maicol07/material-web-additions/commit/4f1a28df9600c6ed0b9daab159beec66943c2a67) **deps:** ⬆️ Upgraded dependencies
- [`a6984eb`](https://github.com/maicol07/material-web-additions/commit/a6984ebb1621c74d7284d848f8ae8852d38fe589) **deps:** ⬆️ Upgraded dependencies
- [`6111ed5`](https://github.com/maicol07/material-web-additions/commit/6111ed5629d90e8404dc6d8c1352146897c0b020) **ide:** IDE settings


<a name="1.1.1"></a>
## [1.1.1](https://github.com/maicol07/material-web-additions/compare/1.1.0...1.1.1)

> Released on February 22, 2023

### 🐛 Bug Fixes
- [`0e6aa37`](https://github.com/maicol07/material-web-additions/commit/0e6aa376f6804d942934bda20bc225074bf2dcd5) Temporarily removed autocomplete readonly to get the page size select working.
- [`5220319`](https://github.com/maicol07/material-web-additions/commit/5220319176ef1f5aee03b3417e4fd8fc48517b43) Fix text fields height after upgrading to Material Web 1.0.0-pre2
- [`ee04821`](https://github.com/maicol07/material-web-additions/commit/ee04821633b9a24ff934d3e5dc5168d4d1da83ac) Fix incompatibility with Material Web 1.0.0-pre2

### Other changes
- [`8cee92d`](https://github.com/maicol07/material-web-additions/commit/8cee92d7fcae1e601550ffe0e9682f8b3a93fbfd) Bump package version
- [`3f0fd81`](https://github.com/maicol07/material-web-additions/commit/3f0fd81fc736f9c8b62decbe453ad191a3851fed) **deps:** ⬆️ Upgraded dependencies


<a name="1.1.0"></a>
## [1.1.0](https://github.com/maicol07/material-web-additions/compare/1.0.0...1.1.0)

> Released on February 04, 2023

### ✨ Features
- [`30111bd`](https://github.com/maicol07/material-web-additions/commit/30111bd227c798153cad8ba43d5752428f43eb1e) **data-table:** ✨ Added support for multiple filters at the same time
- [`9d0b064`](https://github.com/maicol07/material-web-additions/commit/9d0b0645668f831ff6e654d708e05158884469ba) **data-table:** ✨ Added Keydown event on column filter text field

### ⏪ Reverted
- [`d29c045`](https://github.com/maicol07/material-web-additions/commit/d29c045cbc36c0aa513960e949e54c9cdae69714) Revert "ci: 💚 Improved changelog generation format"

    This reverts commit b879dbc14c5a01cc91805512c0946d55ef836478.

### Other changes
- [`a0109ed`](https://github.com/maicol07/material-web-additions/commit/a0109edf7b7b5f1cd5356262af854175c58f35d5) **deps:** ⬆️ Upgraded dependencies
- [`5acc8fc`](https://github.com/maicol07/material-web-additions/commit/5acc8fc3f4f4cbb4b0dc1b0917ff702615934f7f) **ide:** Disabled inspection


<a name="1.0.0"></a>
## [1.0.0](https://github.com/maicol07/material-web-additions/compare/0.26.1...1.0.0)

> Released on January 21, 2023

### ✨ Features
- [`d1a5578`](https://github.com/maicol07/material-web-additions/commit/d1a5578b8ab958a3cafb05c08016860b1d61d7f8) **card:** Updated to new elevation API
- [`824217b`](https://github.com/maicol07/material-web-additions/commit/824217b66bb3b8c262517983a3b71341ab72cbb7) **data-table:** ✨ Updated Data Table to MD3

### ⚡ Performance Improvements
- [`8c53ced`](https://github.com/maicol07/material-web-additions/commit/8c53cedbf9ee40964bebb8f451b1e7ad3f4075db) Optimized imports

### 🐛 Bug Fixes
- [`e0ec914`](https://github.com/maicol07/material-web-additions/commit/e0ec9146f35548d5961583f3d46798ecef361774) Fix package type when building
- [`b957b5d`](https://github.com/maicol07/material-web-additions/commit/b957b5d2cee85ed2560c7a1f2a15136a9facc7ae) Fix missing material packages
- [`9202894`](https://github.com/maicol07/material-web-additions/commit/92028941ece3e37af0a7fd39e7400b0c3f6ab1e8) Fix missing layout grid dependency
- [`b1f8993`](https://github.com/maicol07/material-web-additions/commit/b1f8993b68d7d7dc82e9a8e73d80a1d98a9ec9be) **card:** Fix border condition
- [`090c978`](https://github.com/maicol07/material-web-additions/commit/090c97814bb98ab724033a1d1de78f60724fa508) **card:** Fix card elevation
- [`71db883`](https://github.com/maicol07/material-web-additions/commit/71db8834fff2aa9c061cdd7590c10d475f71a7d0) **data-table:** Fix private package

### ♻ Code Refactoring
- [`3a9a33a`](https://github.com/maicol07/material-web-additions/commit/3a9a33afd3d7c0b066273bc88a14071ef62de7f8) **layout-grid:** 🏷️ Separated attributes types from map

### 📝 Docs changes
- [`ee0216c`](https://github.com/maicol07/material-web-additions/commit/ee0216ccd76dff8b4a027b056d78a3fdf5d95698) 📝 Removed bundlephobia badge
- [`d76c449`](https://github.com/maicol07/material-web-additions/commit/d76c449ebf31691cc71b9ef3d4f2f66b7b876832) 📝 Fix typo on package scope

    Closes: [#3](https://github.com/maicol07/material-web-additions/issues/3)
- [`01d5ca6`](https://github.com/maicol07/material-web-additions/commit/01d5ca60fef02e624f7c4b5034ea8c7c4dd34ff8) Fix uncommented elements
- [`b25076d`](https://github.com/maicol07/material-web-additions/commit/b25076db63cf546fcac70d82a54388c88e055115) ✨ Migrated to Storybook 7 and Vite
- [`30a6c88`](https://github.com/maicol07/material-web-additions/commit/30a6c884ef05260c7f55e24f1262360fffb3eaa1) Changed link to match new branch name
- [`095eacf`](https://github.com/maicol07/material-web-additions/commit/095eacfcdf659a16c641efb56a6865149efa80d0) Added missing icon button component
- [`4be716b`](https://github.com/maicol07/material-web-additions/commit/4be716b70ead60c418b973363499d7c3605af097) Fixed component card primary action not activating
- [`ace0939`](https://github.com/maicol07/material-web-additions/commit/ace0939a825510e8af7c366dc2f0918315c271a3) Added storybook button

### 👷 Building scripts changes
- [`3ecf497`](https://github.com/maicol07/material-web-additions/commit/3ecf4976035cec00083b3b58dd7408f441307bdc) 🐛 Fix card building
- [`b2618f6`](https://github.com/maicol07/material-web-additions/commit/b2618f67a796eb3d84211866d92e02150f759dd4) **docs:** 💚 Run docs build with latest pnpm

### 👷 CI changes
- [`b879dbc`](https://github.com/maicol07/material-web-additions/commit/b879dbc14c5a01cc91805512c0946d55ef836478) 💚 Improved changelog generation format
- [`b432264`](https://github.com/maicol07/material-web-additions/commit/b4322641c58d4c1e6a65bc092f4819af5b1e56a6) Fix checkout action compatibility with chromatic
- [`983ff1c`](https://github.com/maicol07/material-web-additions/commit/983ff1cd3f507063aa665816b15e10d162b85653) 👷 Fix old NodeJS version working
- [`b40dea9`](https://github.com/maicol07/material-web-additions/commit/b40dea9f5fa8c687940a92e84b10145253c22af3) 👷 Updated node version

### Other changes
- [`a5ae3fd`](https://github.com/maicol07/material-web-additions/commit/a5ae3fd33f43b0f6daa61c65f45754479c7995fe) Added `prepublishOnly` script
- [`fecad9a`](https://github.com/maicol07/material-web-additions/commit/fecad9a272cf155bdfdcbba842c7f3e0d24519dc) 🙈 Added custom-elements.json to .gitignore
- [`f2ae1ff`](https://github.com/maicol07/material-web-additions/commit/f2ae1ffd6d201212fe66b392a2e30107dd34af4c) Reorganized repo for M3

    Added completed components (Card and Layout Grid)
- [`56a5c58`](https://github.com/maicol07/material-web-additions/commit/56a5c5898dc71e9f8bf227d7fc08a0bcfffd0d3c) Removed unused npmrc
- [`e749d64`](https://github.com/maicol07/material-web-additions/commit/e749d64aa60a7d651b34889ea3eaf26b910f0dcd) Updated package name
- [`0b38643`](https://github.com/maicol07/material-web-additions/commit/0b38643b1de8acaf9213e05250342b648c09916b) **deps:** Added lock file
- [`f4d6478`](https://github.com/maicol07/material-web-additions/commit/f4d6478eb9c6702eef52d65d98822a6bf58218df) **deps:** Updated pnpm
- [`e6ed0e0`](https://github.com/maicol07/material-web-additions/commit/e6ed0e0b69e755b1b5dca024110fff7344a1fc95) **deps:** Updated pnpm version
- [`cd375ea`](https://github.com/maicol07/material-web-additions/commit/cd375ea26310115d571c39ac0237c04c49859152) **deps:** Updated dependencies
- [`109432a`](https://github.com/maicol07/material-web-additions/commit/109432a83ffdf3f0c8eba6d893368ccde33d9b54) **deps:** ⬆️ Upgraded dependencies
- [`dc80c33`](https://github.com/maicol07/material-web-additions/commit/dc80c339422696c9879aa71e9db4ceed5dc94dc5) **deps:** ⬆️ Updated dependencies
- [`0233c44`](https://github.com/maicol07/material-web-additions/commit/0233c444abb76ba3bd74bbc9aabb723ab168c769) **deps:** ⬆️ Updated dependencies
- [`ebd6b4e`](https://github.com/maicol07/material-web-additions/commit/ebd6b4e168d269e1ce773be1cc2fe70ad415db52) **ide:** Updated IDE files


<a name="0.26.1"></a>
## [0.26.1](https://github.com/maicol07/material-web-additions/compare/0.26.0...0.26.1)

> Released on July 02, 2022

### 🐛 Bug Fixes
- [`f8fcf8a`](https://github.com/maicol07/material-web-additions/commit/f8fcf8a07bb4c4edc062c1babb5054638315c6b4) Fix repo URL

### Other changes
- [`2848112`](https://github.com/maicol07/material-web-additions/commit/2848112b9fcdb7b8bbf23b6be14231c992b37470) Test new changelog action
- [`44e06cf`](https://github.com/maicol07/material-web-additions/commit/44e06cf699f652b7c37d43bd7e7673f1bf4e4534) Test new changelog action
- [`25906d0`](https://github.com/maicol07/material-web-additions/commit/25906d0f918b8ea8dfa16f94caf73750259ca918) Updated changelog generation workflow


<a name="0.26.0"></a>
## [0.26.0](https://github.com/maicol07/material-web-additions/compare/0.25.3...0.26.0)

> Released on July 01, 2022

### ✨ Features
- [`3ef0c09`](https://github.com/maicol07/material-web-additions/commit/3ef0c09506bccc731efa8220426e4834de956249) ✨ Reworked layout grid
- [`4ccfaf7`](https://github.com/maicol07/material-web-additions/commit/4ccfaf7a2094c69b679eaaba113b6f1705a88eb0) ✨ Rewritten Card component
- [`13b36aa`](https://github.com/maicol07/material-web-additions/commit/13b36aac91420aa5bdc51c63abb1c16733785d0c) **data-table:** ✨ Added data table
- [`ad43097`](https://github.com/maicol07/material-web-additions/commit/ad430973e0a8f5f63f7b08ae521b5f0601c94404) **icon-button:** ✨ Added icon button component

### 🐛 Bug Fixes
- [`307fa38`](https://github.com/maicol07/material-web-additions/commit/307fa381db75658031af4532356f6903b414347d) Fix `[@mwa](:/mwa)/-` links
- [`d2bee0d`](https://github.com/maicol07/material-web-additions/commit/d2bee0d0d425f08c9e3db6c5080cabc00415b5d5) pnpm fix for WSL
- [`d0245ba`](https://github.com/maicol07/material-web-additions/commit/d0245ba2c0a2f8fbc6c0c6a6ab06c41c0e21bbf6) Fix import for CI
- [`5e975b1`](https://github.com/maicol07/material-web-additions/commit/5e975b1766ba92f47a0c37076452104d4158eb1d) **card:** Added missing dependency
- [`934a2b9`](https://github.com/maicol07/material-web-additions/commit/934a2b9d87bbe6501dcaa95f8530356dab7bf25b) **data-table:** Fix class not found
- [`6ab3de7`](https://github.com/maicol07/material-web-additions/commit/6ab3de7c581f099e2e85d80aa7f52dfa9e942077) **data-table:** Fix `lastRowOfPage` initialization error
- [`7283206`](https://github.com/maicol07/material-web-additions/commit/72832062de5467d55e173a705b55c5f0371bb73d) **data-table:** Added missing dependency
- [`21ef6c8`](https://github.com/maicol07/material-web-additions/commit/21ef6c8a8f815f2b1b93687766e6addd8ce8f344) **data-table:** Added missing dependency
- [`cdf208b`](https://github.com/maicol07/material-web-additions/commit/cdf208b936e1ae7f30a442a825b3d2824175ed4b) **data-table:** Added missing dependency
- [`6d1a15d`](https://github.com/maicol07/material-web-additions/commit/6d1a15df5eefc65eab19ca45b0ca9c40eeee1db0) **deps:** Added `public-hoist-pattern`

### ♻ Code Refactoring
- [`43b79ef`](https://github.com/maicol07/material-web-additions/commit/43b79ef72a0a3486edd261e39048fa3f6be66873) 🚚 Renamed files to MWA
- [`dabce9a`](https://github.com/maicol07/material-web-additions/commit/dabce9a3b32a0c468edf701a2b3adb74ef359b8b) ♻️ Updated storybook paths
- [`5edd84e`](https://github.com/maicol07/material-web-additions/commit/5edd84e7c16d05a2bae82d7388f2b2c795e497cb) ♻️ Removed unused dependency
- [`2f1407c`](https://github.com/maicol07/material-web-additions/commit/2f1407ce3f96932e272821d9974c2f05cb3ded70) ♻️ Use `:last-of-type` instead of `:last-child`
- [`41231e9`](https://github.com/maicol07/material-web-additions/commit/41231e96ece637aa2c0251ec72872f6f54542b89) ♻️ Use relative paths
- [`8ca673a`](https://github.com/maicol07/material-web-additions/commit/8ca673a0738d003d680b2aadb8e75d17453511f0) ♻️ Removed old commented component

### 📝 Docs changes
- [`cad0a23`](https://github.com/maicol07/material-web-additions/commit/cad0a23aab43c26fedfd9630c8df69795d5c318a) Temporary replaced MD tables with HTML ones due to storybookjs/storybook[#18556](https://github.com/maicol07/material-web-additions/issues/18556)
- [`18acdab`](https://github.com/maicol07/material-web-additions/commit/18acdab38b1ff02185c1b1acc763ecdc8fea6fe3) 📝 Improved docs

    - Updated storybook and related dependencies to 6.5.9
    - Enabled MDXv2
    - Separated components cards definition from mdx file
    - Styling improvements
- [`586dd9b`](https://github.com/maicol07/material-web-additions/commit/586dd9bad94278ea3af93f040a9bd00302c5810b) 📝 Replaced wrong links with correct links
- [`bb20813`](https://github.com/maicol07/material-web-additions/commit/bb208138c306de54cce7b1afdb37da24ea72fc69) Added links to components card
- [`d80a80d`](https://github.com/maicol07/material-web-additions/commit/d80a80dcdfbf427575de1479d40612ee8689db1f) 📝 Added storybook docs

### 👷 Building scripts changes
- [`60ee996`](https://github.com/maicol07/material-web-additions/commit/60ee99698ec892c99b5f1beb162ba6b856aec262) Fix missing stylesheet in `build:style` command
- [`d4d1c2b`](https://github.com/maicol07/material-web-additions/commit/d4d1c2bd469f507e519ee456ff16688739e8d007) 💚 Fix storybook build
- [`086efe2`](https://github.com/maicol07/material-web-additions/commit/086efe292db9529d35d010dee2e8381dbacba14c) 💚 Fix storybook build
- [`784f7d5`](https://github.com/maicol07/material-web-additions/commit/784f7d549bdd765268c868e92a9285a262c3ecf9) 💚 Fix storybook build

### 👷 CI changes
- [`5ff5898`](https://github.com/maicol07/material-web-additions/commit/5ff5898ecd9d746b099b51b8b0cc02b8c098a498) Added auto changelog generation
- [`a6eb422`](https://github.com/maicol07/material-web-additions/commit/a6eb4227c8f0eb042c45637e186bfde779ce792f) 👷 Build JS before publishing docs
- [`c696bf4`](https://github.com/maicol07/material-web-additions/commit/c696bf4da87d1dd0ccc2a072543f60c969873626) Fix storybook build
- [`64a8fb7`](https://github.com/maicol07/material-web-additions/commit/64a8fb716ab16a5ff569533270e11a1ef3485419) Fix storybook build
- [`012dd0c`](https://github.com/maicol07/material-web-additions/commit/012dd0ce824267fca70dd5809884b0b8f2e5424b) 👷 Update PNPM version
- [`6b62aa0`](https://github.com/maicol07/material-web-additions/commit/6b62aa0d835df0b4634e147e27dc9e2a406951fb) 💚 Build custom elements manifest and use PNPM

### Other changes
- [`4f18238`](https://github.com/maicol07/material-web-additions/commit/4f18238ac82c5e9b7c9313bd77c9530e2e61d55b) 🔖 Renamed to `[@maicol07](:/maicol07)/mwa-` and bumped version
- [`32176b7`](https://github.com/maicol07/material-web-additions/commit/32176b79e77a6d821fd51584f3f3db896558044c) IDE files
- [`4ceab3e`](https://github.com/maicol07/material-web-additions/commit/4ceab3e9fcd6d43208d7ba9021cb843056289f93) 🚚 Renamed all to MWA
- [`9694d51`](https://github.com/maicol07/material-web-additions/commit/9694d51a73e8227cd6021da3d44283cc6c2d2ebe) Reorganized scripts and dependencies
- [`7c96f95`](https://github.com/maicol07/material-web-additions/commit/7c96f95c59945f03c821a771a4aa6a5e40667d0c) **deps:** ⬆️ Upgraded dependencies
- [`4109482`](https://github.com/maicol07/material-web-additions/commit/41094820aa0544e2aa9d98e47940976dba077a23) **deps:** Updated dependencies

### ⏪ Reverts

- [`8edc1cc`](https://github.com/maicol07/material-web-additions/commit/8edc1cc00f9011944cf62fc5f7bd073618def37d) fix(data-table): Added missing dependency

      This reverts commit cdf208b936e1ae7f30a442a825b3d2824175ed4b.
- [`9c96c17`](https://github.com/maicol07/material-web-additions/commit/9c96c17987f413ecf095dd9700f74397200e05c4) fix(card): Added missing dependency

      This reverts commit 5e975b1766ba92f47a0c37076452104d4158eb1d.
- [`fcc77bf`](https://github.com/maicol07/material-web-additions/commit/fcc77bf82b8df54c7d83b3df1bc1e484f0f14948) fix(data-table): Added missing dependency

      This reverts commit 21ef6c8a8f815f2b1b93687766e6addd8ce8f344.
- [`baa1df5`](https://github.com/maicol07/material-web-additions/commit/baa1df5471169b44333a601967d87ed63928fd1e) fix(data-table): Added missing dependency

      This reverts commit 72832062de5467d55e173a705b55c5f0371bb73d.


<a name="0.25.3"></a>
## [0.25.3](https://github.com/maicol07/material-web-additions/compare/0.25.2...0.25.3)

> Released on January 17, 2022

### ✨ Features
- [`41f0171`](https://github.com/maicol07/material-web-additions/commit/41f01717d8dde57cbe7d43e5278a7cc1bb9f9257) ✨ Inherit all the css props

### 🐛 Bug Fixes
- [`b4fecf2`](https://github.com/maicol07/material-web-additions/commit/b4fecf26d772bdd93617e438c4b178cbc17fc242) **card:** 💄 Fixed base card styles

### ♻ Code Refactoring
- [`96b4f59`](https://github.com/maicol07/material-web-additions/commit/96b4f595a88e0b10b90ec7576c9a664502561025) 🎨 Reformatted code
- [`fb50e90`](https://github.com/maicol07/material-web-additions/commit/fb50e903e6bf8d823e868a1c49b24abae9fb2206) ♻️ Line separators

### 📝 Docs changes
- [`f22f749`](https://github.com/maicol07/material-web-additions/commit/f22f749d35cd03f4c6130f322d2e479d4b33ff17) 📝 Added card to published components

### Other changes
- [`1cf332a`](https://github.com/maicol07/material-web-additions/commit/1cf332aa980196746e2a2844446d8ab1f1494e47) 🔥 Remove lerna config


<a name="0.25.2"></a>
## [0.25.2](https://github.com/maicol07/material-web-additions/compare/0.25.1...0.25.2)

> Released on November 16, 2021

### ✨ Features
- [`dd72cde`](https://github.com/maicol07/material-web-additions/commit/dd72cdedb435286e25ca354b90910825cee6cfb9) **card:** ✨ Added MWC Cards

### 🐛 Bug Fixes
- [`1323ab9`](https://github.com/maicol07/material-web-additions/commit/1323ab944d2cfe3aebd938f2bf41247e5aa03dfb) Remove reflect so that attribute isn't shown if it hasn't a value


<a name="0.25.1"></a>
## [0.25.1](https://github.com/maicol07/material-web-additions/compare/0.25.0...0.25.1)

> Released on November 15, 2021

### 🐛 Bug Fixes
- [`638268b`](https://github.com/maicol07/material-web-additions/commit/638268bac85d465f87b40dff0df5b309c8511076) 💚 Fix publish

### 📝 Docs changes
- [`0036ec5`](https://github.com/maicol07/material-web-additions/commit/0036ec5cd7200ef9f103e7b61fe3ec90aab59d1d) 📝 Updated README
- [`87dec01`](https://github.com/maicol07/material-web-additions/commit/87dec01cc2a7109365dea8551cbda976d8d4ecf2) 📝 Updated README

### 👷 CI changes
- [`73c66ef`](https://github.com/maicol07/material-web-additions/commit/73c66ef54da05d0f594800b769c15dde1a98cdf6) Remove actions
- [`b093db8`](https://github.com/maicol07/material-web-additions/commit/b093db83c3bbcc7d607625188020f71ba55a4d83) 💚 Fix canary builds
- [`a99445b`](https://github.com/maicol07/material-web-additions/commit/a99445b618561aef7f923e845d6cc7736240c75f) 💚 Fix styles build & publish
- [`44224df`](https://github.com/maicol07/material-web-additions/commit/44224df200255e6a2a330e28954f474688e17592) 💚 Fix publish
- [`e685390`](https://github.com/maicol07/material-web-additions/commit/e68539009cf5db234896d6aaa9205c7e00cde09a) 💚 Remove demos workflow
- [`14b9d2d`](https://github.com/maicol07/material-web-additions/commit/14b9d2d02f5d46c13eb1fd96cdb364f261685463) 💚 Use pnpm on CI

### Other changes
- [`e9ff63f`](https://github.com/maicol07/material-web-additions/commit/e9ff63f39f64eaac616b5ea8d9f3d6aef733eff2) Reorganize packages
- [`cfa1ce4`](https://github.com/maicol07/material-web-additions/commit/cfa1ce4a79c9f7135bf55fa8b3cd27e56dd97d5c) 💚 Fix CI and remove a workflow
- [`e880e18`](https://github.com/maicol07/material-web-additions/commit/e880e182081ae540b7573bcc22b8900beaecdb84) Rename package
- [`927a459`](https://github.com/maicol07/material-web-additions/commit/927a459ca50207b8da5a8afa8bf9765ba58bf576) Organized in a monorepo
- [`6428ad4`](https://github.com/maicol07/material-web-additions/commit/6428ad4c40d988580a6e3d3a37367b1cb3117a0e) 🚚 Moved mwc-layout-grid to its folder
- [`64a2329`](https://github.com/maicol07/material-web-additions/commit/64a2329349f411b7094e35b1b6b9e03a68d7b524) 🚚 Moved mwc-layout-grid to its folder
- [`9767cce`](https://github.com/maicol07/material-web-additions/commit/9767ccef2ac8cb19738177b4a48665b43a3f5ac3) **deps:** ➖ Remove lerna and related scripts


<a name="0.25.0"></a>
## 0.25.0

> Released on November 11, 2021

### Other changes
- [`14e5e5a`](https://github.com/maicol07/material-web-additions/commit/14e5e5a253d6572b26802165537524cb9d2aa626) Change package name
- [`3452292`](https://github.com/maicol07/material-web-additions/commit/34522920c7bfe84b97b43fda41021bdcce6e706c) **deps:** Update deps and remove build files
