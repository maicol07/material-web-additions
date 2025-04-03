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

/** Knob types for card stories. */
export interface StoryKnobs {
  clickable: boolean;
}

const styles = css`
  .column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .row {
    display: flex;
    gap: 16px;
  }

  .demo-card {
    width: 400px;

    img:not(:first-child) {
      padding-bottom: 16px;
    }
  }

  .demo-card--with-custom-borders {
    --md-card-container-shape: 24px 8px;
  }

  .demo-card__header {
    display: flex;
    flex-direction: row;
    padding: 16px;
  }

  .demo-card-thumbnail {
    width: 40px;
    height: 40px;
    line-height: 2.25;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin: 0 16px 0 0;
    align-self: center;
  }

  .demo-card__header-text {
    display: flex;
    flex-direction: column;
  }

  .demo-card__title,
  .demo-card__subtitle,
  .demo-card__secondary {
    font-family: Roboto, sans-serif;
  }

  .demo-card__title {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: .0125em;
    color: rgba(0, 0, 0);
  }

  .demo-card__subtitle {
    font-size: .875rem !important;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: .0178571429em;
    color: rgba(0, 0, 0, 0.54);
    text-decoration: inherit;
    text-decoration-line: inherit;
    text-decoration-style: inherit;
    text-decoration-color: inherit;
  }

  .demo-card__secondary {
    font-size: .875rem !important;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    color:
            rgba(0, 0, 0, 0.54);
    text-decoration: inherit;
    text-transform: inherit;
    /* top margin adjusted for 16px of line-height, length to baseline 28px*/
    /* bottom margin adjusted for 2px of line-height, length to baseline */
    /* padding: 12px 16px 22px; */
    padding: 0 1rem 8px;
  }

  .demo-card--with-text-over-media .demo-card__secondary,
  .demo-card--with-header .demo-card__secondary {
    padding-top: 1rem;
  }

  .demo-card--with-media-header .demo-card__header {
    padding: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .demo-card--with-media-header .demo-card__media {
    width: 110px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    --mdc-card-media-border-top-left-radius: 10px;
    --mdc-card-media-border-top-right-radius: 10px;
  }

  .demo-card--with-media-header .demo-card__header-text {
    padding: 1rem;
  }

  .demo-card__media {
    --mdc-card-media-background-image: url("https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg");
  }

  .demo-card__media-content .demo-card__title,
  .demo-card__media-content .demo-card__subtitle {
    color: rgb(255, 255, 255);
  }

  .demo-card__media-content {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
  }

  .demo-crop-image {
    background-size: 200%;
  }
`;

const cards: MaterialStoryInit<StoryKnobs> = {
  name: 'Card variants',
  styles,
  render({clickable}) {
    return html`
        <style>
        </style>
      <div class="column">
        <div class="row">
          <md-filled-card style="--md-card-padding: 16px;" ?clickable=${clickable}>
            Content
          </md-filled-card>

            <md-elevated-card style="--md-card-padding: 16px;" ?clickable="${clickable}">
                Content
            </md-elevated-card>

            <md-outlined-card style="--md-card-padding: 16px;" ?clickable="${clickable}">
                Content
            </md-outlined-card>
        </div>
      </div>
    `;
  }
};
const actions: MaterialStoryInit<StoryKnobs> = {
  name: 'Primary Action',
  styles,
  render({clickable}) {
    return html`
        <style>
            md-elevated-card, md-filled-card, md-outlined-card {
                --md-card-padding: 16px;
            }
        </style>
        <md-elevated-card ?clickable="${clickable}" class="demo-card">
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
        </md-elevated-card>
    `;
  }
};

const media: MaterialStoryInit<StoryKnobs> = {
  name: 'Media',
  styles,
  render({clickable}) {
    return html`
        <md-elevated-card class="demo-card" ?clickable="${clickable}">
            <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                 alt="Background photo" class="demo-card__media"/>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </md-elevated-card>
    `;
  }
};

/** Cards stories. */
export const stories = [cards, actions, media];
