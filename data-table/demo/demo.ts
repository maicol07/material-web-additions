/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '~catalog/stories/index.js';
import '~catalog/stories/material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo} from '~catalog/stories/material-collection.js';
import {boolInput, Knob, selectDropdown, textInput} from '~catalog/stories/index.js';

import {stories, StoryKnobs} from './stories.js';

const collection =
  new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('Card', [
    new Knob('paginated', {ui: boolInput(), defaultValue: false}),
    new Knob('inProgress', {ui: boolInput(), defaultValue: false}),
    new Knob('density', {ui: selectDropdown({options: ['', 'tight', 'comfortable', 'dense', 'compact']}), defaultValue: ''}),
    new Knob('pageSizes', {ui: textInput(), defaultValue: '10,20,30'}),
    new Knob('pageSizesLabel', {ui: textInput(), defaultValue: 'Rows per page:'}),
    new Knob('currentFirstRow', {ui: textInput(), defaultValue: '1'}),
    new Knob('currentPageSize', {ui: textInput(), defaultValue: '10'}),
    new Knob('currentLastRow', {ui: textInput(), defaultValue: '10'}),
    new Knob('paginationTotalLabel', {ui: textInput(), defaultValue: 'of'}),
  ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection, {fonts: 'roboto', icons: 'material-symbols'});
