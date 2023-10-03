/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Island from '@11ty/is-land';

customElements.define('lit-island', // @ts-ignore
  class extends Island.component {
  // Removes the feature in which 11ty island removes DOM to render a fallback.
  forceFallback() {}
});
