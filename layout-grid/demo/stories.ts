/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/icon/icon.js';
import '@maicol07/material-web-additions/layout-grid/layout-grid.js';

import {MaterialStoryInit} from '~catalog/stories/material-collection.js';
import {css, html} from 'lit';

/** Knob types for button stories. */
export interface StoryKnobs {
  fixedColumnWidth: boolean;
  align: '' | 'center' | 'left' | 'right';
}

const styles = css`
  .demo-grid {
    background: var(--md-sys-color-surface-container);
    min-width: 360px;
  }
  .demo-grid--alignment {
    max-width: 800px;
  }
  .demo-grid--cell-alignment {
    min-height: 200px;
  }
  .demo-inner {
    min-height: 200px;
  }
  .demo-cell {
    background: var(--md-sys-color-surface-dim);
    height: 100px;
  }
  .demo-grid .demo-grid .demo-cell {
    background: var(--md-sys-color-outline);
    height: 100px;
  }
  .demo-cell--alignment {
    max-height: 50px;
  }
`;

const basic: MaterialStoryInit<StoryKnobs> = {
  name: 'Basic',
  styles,
  render({fixedColumnWidth, align}) {
    return html`
        <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
            <div class="demo-cell"></div>
            <div class="demo-cell"></div>
            <div class="demo-cell"></div>
        </md-layout-grid>
    `;
  }
};
const customSpanSize: MaterialStoryInit<StoryKnobs> = {
  name: 'Custom span size',
  styles,
  render({fixedColumnWidth, align}) {
    return html`
        <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
            <div class="demo-cell" grid-span="6"></div>
            <div class="demo-cell" grid-span="3"></div>
            <div class="demo-cell" grid-span="2"></div>
            <div class="demo-cell" grid-span="1"></div>
            <div class="demo-cell" grid-span="3"></div>
            <div class="demo-cell" grid-span="1"></div>
            <div class="demo-cell" grid-span="8"></div>
        </md-layout-grid>
    `;
  }
};
const nested: MaterialStoryInit<StoryKnobs> = {
  name: 'Nested',
  styles,
  render({fixedColumnWidth, align}) {
    return html`
        <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
            <md-layout-grid-inner class="demo-cell demo-grid" style="min-width: 0">
                <div class="demo-cell"></div>
                <div class="demo-cell"></div>
            </md-layout-grid-inner>
            <div class="demo-cell"></div>
            <div class="demo-cell"></div>
        </md-layout-grid>
    `;
  }
};

/** Button stories. */
export const stories = [basic, customSpanSize, nested];
