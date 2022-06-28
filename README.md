# Material Web Additions

[![Test Status](https://github.com/maicol07/material-web-additions/workflows/tests/badge.svg?branch=master)](https://github.com/maicol07/material-web-additions/actions?query=workflow%3Atests+branch%3Amaster) [![GitHub issues by-label](https://img.shields.io/github/issues-raw/maicol07/material-web-additions/Type:%20Bug)](https://github.com/maicol07/material-web-additions/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Bug%22)

> IMPORTANT: Material Web & Material Web Additions are a work in progress and subject to major changes until 1.0 release.

Material Web Additions are additional components to [Material Web](https://github.com/material-components/material-web)
components: Google’s UI toolkit for building beautiful, accessible web applications. Material Web & Material Web
Additions are implemented as a collection
of [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

The Material team is currently working on [Material You](https://material.io/blog/announcing-material-you) (Material
Design 3) support for Material components.

Developers using this library should expect some big changes after Material Web v1 has been released (when the Material
team finished their work on Material You).

A few notable changes you should expect:

- UX changes as we adopt the new designs (production users will definitely want to pin to an appropriate release, not
  mainline)
- A single npm package (`@maicol07/md-web-additions`)
- Simplification of tag name prefixes to `md-` (CSS custom properties will be `--md-`)
- Components with variant attributes will be split into several variant components:

  Example: `mwa-card` will be split into `md-card`, `md-outlined-card`, `md-tonal-button`, `md-outlined-button`, etc

[Contributing Guide](#Contributing)

## Components

The components in this repo have been originally developed by other authors, then abandoned. I've decided to adopt them
and rework them as a unique package


| Component              | Status                                                                                                                                     | Original author                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `<mwc-bottom-app-bar>` | [*TBD*](https://github.com/material-components/material-components-web-components/issues/298) (Not planned at the moment)                 |                                                                                                                                     |
| `<mwa-card>`           | [![Published on npm](https://img.shields.io/npm/v/@mwa/card.svg)](https://www.npmjs.com/package/@mwa/card)               | [AuthX](https://github.com/AuthX) ([Repo](https://github.com/AuthX/material-components-web-components/blob/develop/packages/card)) |
| `<mwc-chip>`           | [*TBD*](https://github.com/material-components/material-components-web-components/issues/418)                                              |                                                                                                                                     |
| `<mwa-data-table>`     | [*TBD*](https://github.com/material-components/material-components-web-components/issues/386)                                              |                                                                                                                                     |
| `<mwa-layout-grid>`    | [![Published on npm](https://img.shields.io/npm/v/@mwa/layout-grid.svg)](https://www.npmjs.com/package/@mwa/layout-grid) | [Chromakey](https://github.com/chromakey-io) ([Repo](https://github.com/chromakey-io/mwa-layout-grid))                             |
| `<mwc-tooltip>`        | [*TBD*](https://github.com/material-components/material-components-web-components/issues/1499)                                             |                                                                                                                                     |

## Quick start

#### 1) Install

Install a component from NPM:

```sh
npm install @mwa/layout-grid
```

#### 2) Write HTML and JavaScript

Import the component's JavaScript module, use the component in your HTML, and control it with JavaScript, just like you
would with a built-in element such as `<button>`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Example App</title>

    <!-- Your application may load the Roboto and Material Icons fonts. -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
  </head>
  <body>
    <!-- Use Web Components in your HTML like regular built-in elements. -->
    <mwa-layout-grid id="myGrid">
        <p>I'm on the first column</p>
        <button> I'm in the middle</button>
        <input value="I'm in the last column"/>
    </mwa-layout-grid>

    <!-- Material Web uses standard JavaScript modules. -->
    <script type="module">

      // Importing this module registers <mwc-button> as an element that you
      // can use in this page.
      //
      // Note this import is a bare module specifier, so it must be converted
      // to a path using a server such as Web Dev Server.
      import '@mwa/layout-grid';

      // Standard DOM APIs work with Web Components just like they do for
      // built-in elements.
      const grid = document.querySelector('#myGrid');
      button.addEventListener('onmouseenter', () => {
        alert('You entered the layout grid!');
      });
    </script>
  </body>
</html>
```

#### 3) Serve

Serve your HTML with any server or build process that supports *bare module specifier resolution* (see next section):

```sh
npm install --save-dev @web/dev-server
npx web-dev-server --node-resolve
```

## Bare module specifiers

Material Web & Material Web Additions are published as
standard [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) that use *bare
module specifiers*. Bare module specifiers are not yet supported by browsers, so it is necessary to use a tool that
transforms them to a *path* (for example from `@mwa/layout-grid`
to `./node_modules/@mwa/layout-grid/mwa-layout-grid.js`).

Two great choices for tools that do this are:

- During local development, use Modern Web's [`Web Dev Server`](https://modern-web.dev/docs/dev-server/overview/) with
  the `--node-resolve` flag.
- For your production deployment, build your application with [Rollup](https://rollupjs.org/guide/en/) using
  the [`rollup-plugin-node-resolve`](https://github.com/rollup/rollup-plugin-node-resolve) plugin.

## Fonts

Most applications should include the following tags in their main HTML file to ensure that text and icons render
correctly:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
```

Material Web & Material Web Additions default to using the [Roboto](https://fonts.google.com/specimen/Roboto) font for
text, and the [Material Icons](https://google.github.io/material-design-icons/) font for icons. These fonts are *not*
automatically loaded, so it is the application's responsiblity to ensure that they are loaded.

Note that if you load the Material Icons font in a different way to the recommendation shown above, be sure to
include [`font-display: block`](https://google.github.io/material-design-icons/) in your `@font-face` CSS rule. This
prevents icons from initially displaying their raw *ligature* text before the font has loaded. The `<link>` tag
recommended above automaticaly handles this setting.

## Supporting older browsers

Material Web & Material Web Additions use modern browser features that are natively supported in the latest versions of
Chrome, Safari, Firefox, and Edge. IE11 and some older versions of other browsers are also supported, but they require
additional build steps and polyfills.

<table>
  <tr>
    <th><i>Feature</i></th>
    <th><img src="images/chrome.png" width="20px" height="20px"><br>Chrome</th>
    <th><img src="images/safari.png" width="20px" height="20px"><br>Safari</th>
    <th><img src="images/firefox.png" width="20px" height="20px"><br>Firefox</th>
    <th><img src="images/edge.png" width="20px" height="20px"><br>Edge</th>
    <th><img src="images/ie.png" width="20px" height="20px"><br>IE11</th>
  </tr>
  <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td class="ie11"><img src="images/orange-check.png" width="20px" height="20px"class="check" alt="Polyfill"> <a href="#web-components">*</a></td>
  </tr>
 <tr>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">Modules</a></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td class="ie11"><img src="images/orange-check.png" width="20px" height="20px"class="check" alt="Transform"> <a href="#modules">*</a></td>
  </tr>
 <tr>
    <td><a href="https://developers.google.com/web/shows/ttt/series-2/es2015">ES2015</a></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td><img src="images/check-green.png" width="20px" height="20px"class="check" alt="Yes"></td>
    <td class="ie11"><img src="images/orange-check.png" width="20px" height="20px"class="check" alt="Transpile"> <a href="#es2015">*</a></td>
  </tr>
</table>

#### Web Components

To support Web Components in IE11 and other older browsers, install
the [Web Components Polyfills](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs):

```sh
npm install @webcomponents/webcomponentsjs
```

And include the `webcomponents-loader.js` script in your HTML, which detects when polyfills are needed and loads them
automatically:

```html
<!-- Add support for Web Components to IE11. -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
```

#### Modules

To support IE11 or other older browsers that do not support JavaScript modules, you must transform JavaScript modules to
classic JavaScript scripts. [Rollup](https://rollupjs.org/guide/en/) is a popular tool that can consume JavaScript
modules and produce a number of other formats, such as AMD. Be sure to use
the [`rollup-plugin-node-resolve`](https://github.com/rollup/rollup-plugin-node-resolve) plugin to resolve *bare module
specifiers*, as mentioned [above](#bare-module-specifiers).

#### ES2015

If you support IE11 or other older browsers that do not support the latest version of JavaScript, you must *transpile*
your application to ES5. [Babel](https://babeljs.io/) is a popular tool that does this. You can integrate Babel
transpilation into a Rollup configuration using [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel).

## Contributing

Clone and setup the repo:

```sh
git clone git@github.com:@mwa/layout-grid.git material-web-additions
cd material-web-additions
npm install
npm run build
```

View the demos:

```sh
npm run dev
http://127.0.0.1:8000/demos/
```

Run all tests:

```sh
npm run test
```

Run tests for a specific component:

```sh
npm run test -- --packages=mwc-button
```

Run benchmarks for a specific component:

```sh
npm run test:bench -- --package list
```

Advanced developer workflow:

```sh
npm install

# (persistent) build source files on change
npm run watch

# another terminal (persistent) - viewing auto-reload demos
npm run dev -- --watch -p <optional port>

# for testing:
# another terminal (persistent) - build tests (must run after normal watch)
npm run watch:tests

# another terminal (persistent) - debug tests
npm run test:debug -- --autoWatch --packages <comma sepaarated package names> # e.g. mwa-card,mwc-layout*
```
