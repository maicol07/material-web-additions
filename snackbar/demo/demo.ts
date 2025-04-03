/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '~catalog/stories/index.js';
import '~catalog/stories/material-collection.js';

import {KnobTypesToKnobs, MaterialCollection, materialInitsToStoryInits, setUpDemo} from '~catalog/stories/material-collection.js';
import {boolInput, Knob, textInput, numberInput} from '~catalog/stories/index.js';

import {stories, StoryKnobs} from './stories.js';

const collection =
  new MaterialCollection<KnobTypesToKnobs<StoryKnobs>>('Snackbar', [
    new Knob('open', boolInput(), {
      defaultValue: false,
      description: 'Open state of the snackbar.',
    }),
    new Knob('twoLines', boolInput(), {
      defaultValue: false,
      description: 'Support two lines of text.',
    }),
    new Knob('actionText', textInput(), {
      defaultValue: 'Action',
      description: 'Text for the action button.',
    }),
    new Knob('fixed', boolInput(), {
      defaultValue: false,
      description: 'Fixed position of the snackbar.',
    }),
    new Knob('timeout', numberInput(), {
      defaultValue: '5000',
      description: 'Timeout for the snackbar to close automatically.',
    }),
  ]);

collection.addStories(...materialInitsToStoryInits(stories));

setUpDemo(collection, {fonts: 'roboto', icons: 'material-symbols'});
