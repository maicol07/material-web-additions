/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/icon/icon.js';
import '@maicol07/material-web-additions/card/elevated-card.js';
import '@maicol07/material-web-additions/card/filled-card.js';
import '@maicol07/material-web-additions/card/outlined-card.js';

import {MaterialStoryInit} from '~catalog/stories/material-collection.js';
import {css, html} from 'lit';

/** Knob types for button stories. */
export interface StoryKnobs {
  /** Whether the snackbar is open. */
  open: boolean;
  /** Whether the snackbar supports two lines of text. */
  twoLines: boolean;
  /** Text for the action button. */
  actionText: string;
  /** Whether the snackbar is fixed. */
  fixed: boolean;
  /** Timeout for the snackbar to close automatically. */
  timeout: number;
}


const snackbar: MaterialStoryInit<StoryKnobs> = {
  name: 'Snackbar',
  render({open}) {
    return html`
      <md-snackbar open="${open}">
          Snackbar
      </md-snackbar>
    `;
  }
};
const snackbar_two_lines: MaterialStoryInit<StoryKnobs> = {
  name: 'Snackbar Two Lines',
  render({twoLines}) {
    return html`
      <md-snackbar two-lines="${twoLines}">
          Snackbar
          <span>Two lines of text</span>
      </md-snackbar>
    `;
  }
};

const snackbar_action: MaterialStoryInit<StoryKnobs> = {
  name: 'Snackbar Action',
  render({actionText}) {
    return html`
      <md-snackbar action-text="${actionText}">
          Snackbar
          <span slot="action">Action</span>
      </md-snackbar>
    `;
  }
};

/** Button stories. */
export const stories = [snackbar, snackbar_two_lines, snackbar_action];
