<!-- catalog-only-start --><!-- ---
name: Quick Start
title: Quick Start
-----><!-- catalog-only-end -->

# Quick start

<!--*
# Document freshness: For more information, see go/fresh-source.
freshness: { owner: 'maicol07' reviewed: '2023-09-28' }
tag: 'docType:gettingStarted'
*-->

<!-- go/mwc/docs/quick-start -->

<!-- [TOC] -->


[![See it on NPM!](https://img.shields.io/npm/v/@maicol07/material-web-additions?style=for-the-badge)](https://www.npmjs.com/package/@maicol07/material-web-additions)
### Install
Install Material web components using [npm](https://npm.org) or any other [NodeJS](https://nodejs.org) package manager.

| Package Manager | Command                                        |
|-----------------|------------------------------------------------|
| npm             | `npm install @maicol07/material-web-additions` |
| yarn            | `yarn add @maicol07/material-web-additions`    |
| pnpm            | `pnpm add @maicol07/material-web-additions`    |

### Import
Import element definitions from `@maicol07/material-web-additions/<component>/<component-variant>.js`.

```js
// index.js
import '@maicol07/material-web-additions/card/filled-card.js';
import '@maicol07/material-web-additions/layout-grid/layout-grid.js';
```

## Usage

Use the `<component-name>` tag in HTML markup. Refer to the [component docs](components/) for more guidance on using each component.

[Playground](https://lit.dev/playground/#gist=37d28012c5ec6de30809bdf4a6e26cb6)<!-- {.external} -->

```html
<script type="module" src="./index.js"></script>

<md-layout-grid id="myGrid">
    <p>I'm on the first column</p>
    <button> I'm in the middle</button>
    <input value="I'm in the last column"/>
</md-layout-grid>

<md-outlined-card>
    <h1>Card title</h1>
    <p>Card content</p>
</md-outlined-card>
```
## Building

Material web additions components uses bare module specifiers that must be resolved with
tools until [import maps](https://github.com/WICG/import-maps)<!-- {.external} --> are
adopted.

We recommend following
[lit.dev's modern build for production](https://lit.dev/docs/tools/production/#modern-only-build)<!-- {.external} -->
for a more in-depth build guide.

### Rollup quick start

For a quick start, we recommend using [Rollup](https://rollupjs.org/)<!-- {.external} -->
to resolve bare module specifiers into a bundled file.

Install Rollup and a plugin to resolve bare module specifiers.

```shell
npm install rollup @rollup/plugin-node-resolve
```

Create a bundle from an entrypoint `index.js` file and use it in a `<script>`
`"src"` attribute.

```shell
npx rollup -p @rollup/plugin-node-resolve index.js > bundle.js
```

```html
<script src="./bundle.js"></script>
```
