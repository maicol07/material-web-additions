/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/icon/icon.js';
import '@maicol07/material-web-additions/avatar/avatar.js';

import {MaterialStoryInit} from '~catalog/stories/material-collection.js';
import {css, html} from 'lit';

/** Knob types for avatar stories. */
export interface StoryKnobs {
  /** Whether the avatar uses an image. */
  image: boolean;
  /** Whether the avatar is an icon. */
  icon: boolean;
  /** Whether the avatar uses text. */
  text: string;
}


const avatar: MaterialStoryInit<StoryKnobs> = {
  name: 'Avatar',
  render({text, image, icon}) {
    let inner = '';
    if (image) {
      inner = '<img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="Avatar">';
    }

    if (icon) {
      inner = '<md-icon>person</md-icon>';
    }

    if (text) {
      inner = text;
    }

    return html`
      <md-avatar>
          ${inner}
      </md-avatar>
    `;
  }
};


export const stories = [avatar];
