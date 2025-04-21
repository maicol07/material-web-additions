/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '~catalog/stories/index.js';
import '~catalog/stories/material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo} from '~catalog/stories/material-collection.js';
import {boolInput, Knob, textInput} from '~catalog/stories/index.js';

import {stories, StoryKnobs} from './stories.js';

const collection =
  new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('Avatar', [
    new Knob('image', boolInput(), {
      defaultValue: false,
      description: 'Use an image as avatar.',
    }),
    new Knob('icon', boolInput(), {
      defaultValue: false,
      description: 'Use an icon as avatar.',
    }),
    new Knob('text', textInput(), {
      defaultValue: '',
      description: 'Use text as avatar.',
    }),
  ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection, {fonts: 'roboto', icons: 'material-symbols'});
