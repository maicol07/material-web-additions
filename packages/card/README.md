# `<mwc-card>` [![Published on npm](https://img.shields.io/npm/v/@maicol07/mwc-card.svg)](https://www.npmjs.com/package/@maicol07/mwc-card)

[Cards](https://material.io/components/cards/) contain content and actions about a single subject.

For additional information, see the [API](https://github.com/material-components/material-components-web/blob/master/packages/mdc-card/README.md#api).

MWC Card encapsulates [MDC Card](https://material.io/components/cards).

![Card](https://raw.githubusercontent.com/material-components/material-components-web/master/packages/mdc-card/images/card-elevated.png)

## Installation

```sh
npm install @maicol07/mwc-card
```

> NOTE: The Material Web Components are distributed as ES2017 JavaScript Modules, and use the Custom Elements API. They are compatible with all modern browsers including Chrome, Firefox, Safari, Edge, and IE11, but an additional tooling step is required to resolve *bare module specifiers*, as well as transpilation and polyfills for Edge and IE11. See [here](https://github.com/material-components/material-components-web-components#quick-start) for detailed instructions.

## Example Usage

### Standard

```html
<mwc-card>
  Content
</mwc-card>
```

### Outlined card

Just add the `outlined` attribute.

```html
<mwc-card outlined>
  Content
</mwc-card>
```

### Primary action

If a majority of the card (or even the entire card) should be actionable, you can add the `background` attribute to add a background image to the card (the value of this attribute should be the URL/path to your image). You can also add a `title` attribute to display it in front of the image. You can also add an `aspect-ratio` attribute to choose the format of the background image (check attributes below) or use the `media-content` and `primaryAction-content` slots (check slots below).

```html
<mwc-card background="myImage.png" title="MyCard">
  Content
</mwc-card>
```

### Actions

This area is used to show different actions the user can take, typically at the bottom of a card.

#### Buttons

You can add buttons in your card via the `actionButtons` slot:

```html
<mwc-card>
  Content
  <div slot="actionButtons">
    <mwc-button label="Action 1"/>
    <mwc-button label="Action 2"/>
  </div>
</mwc-card>
```

#### Icon Buttons

You can add icon buttons in your card via the `actionIcons` slot:

```html
<mwc-card>
  Content
  <div slot="actionIcons">
    <mwc-button label="Action 1"/>
    <mwc-button label="Action 2"/>
  </div>
</mwc-card>
```

## API

### Slots


| Name                   | Description                                                              |
|------------------------|--------------------------------------------------------------------------|
| _default_              | The card contents                                                        |
| `header`               | Content to display in the primaryAction header                           |
| `mediaContent`         | Content to display on the background image                               |
| `primaryActionContent` | Content to display in the primary action section                         |
| `actionButtons`        | Actions (i.e. some `mwc-button`) to display in the card footer           |
| `actionIcons`          | Icon actions (i.e. some `mwc-icon-button`) to display in the card footer |

### Attributes


| Name                 | Type      | Default | Description                                                                                             |
|----------------------|-----------|---------|---------------------------------------------------------------------------------------------------------|
| `outlined`           | `boolean` | `false` | Removes the shadow and displays a hairline outline instead.                                             |
| `disabled`           | `boolean` | `false` | Disables ripple effect on the primary action                                                            |
| `background`         | `string`  | `''`    | Path or URL of the background image in the Primary Action section                                       |
| `aspectRatio`        | `string`  | `16-9`  | Aspect ratio of the background image in the Primary Action section                                      |
| `title`              | `string`  | `''`    | Title to display as first text in the card or on the primary action image if `background` has a value   |
| `subtitle`           | `string`  | `''`    | Subtitle to display below the card title or below primary action image if `background` has a value      |
| `full-bleed-actions` | `string`  | `''`    | Removes the action area's padding and causes its only child to consume 100% of the action area's width. |

### Methods

*None*

### Events

*None*

### CSS Custom Properties


| Name                | Default | Description                        |
| --------------------- | --------- | ------------------------------------ |
| `--mdc-card-width`  | `350px` | Specifies the width of the card.   |
| `--mdc-card-height` | `350px` | Specifies the height of the card.  |
| `--mdc-card-height` | `16px`  | Specifies the padding of the card. |

## Additional references

- [MDC Web: Card](https://material.io/develop/web/components/card/)
