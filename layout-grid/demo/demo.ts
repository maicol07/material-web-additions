/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '~catalog/stories/index.js';
import '~catalog/stories/material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo} from '~catalog/stories/material-collection.js';
import {boolInput, Knob, selectDropdown} from '~catalog/stories/index.js';

import {stories, StoryKnobs} from './stories.js';

const collection =
  new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('Card', [
    new Knob('fixedColumnWidth', {ui: boolInput(), defaultValue: false}),
    new Knob('align', {ui: selectDropdown({options: ['', 'center', 'left', 'align']}), defaultValue: ''}),
  ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection, {fonts: 'roboto', icons: 'material-symbols'});
