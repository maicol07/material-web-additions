/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A map of Markdown documentation file name to element entrypoints associated
 * with that documentation.
 */
export const docsToElementMapping: {[key: string]: string[]} = {
  'card.md': [
    'card/elevated-card.ts',
    'card/filled-card.ts',
    'card/outlined-card.ts',
  ],
  'layout-grid.md': [
    'layout-grid/layout-grid.ts'
  ],
  'snackbar.md': [
    'snackbar/snackbar.ts'
  ],
  'data-table.md': [
    'data-table/data-table.ts',
    'data-table/data-table-cell.ts',
    'data-table/data-table-column.ts',
    'data-table/data-table-footer.ts',
    'data-table/data-table-row.ts',
  ]
};
