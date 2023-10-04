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
  paginated: boolean;
  inProgress: boolean;
  density: string;
  pageSizes: string;
  pageSizesLabel: string;
  currentFirstRow: number;
  currentPageSize: number;
  currentLastRow: number;
  paginationTotalLabel: string;
}

const styles = css`
`;

const table: MaterialStoryInit<StoryKnobs> = {
  name: 'Data table',
  styles,
  render(args) {
    return html`
        <md-data-table
      aria-label="Desserts"
      ?paginated="${args.paginated}"
      ?in-progress="${args.inProgress}"
      density="${args.density}"
      page-sizes="${args.pageSizes}"
      page-sizes-label="${args.pageSizesLabel}"
      first-row-of-page="${args.currentFirstRow}"
      current-page-size="${args.currentPageSize}"
      last-row-of-page="${args.currentLastRow}"
      pagination-total-label="${args.paginationTotalLabel}"
      current-page-size="${args.currentPageSize}"
      last-row-of-page="${args.currentLastRow}"
    >
      <md-data-table-column>Dessert</md-data-table-column>
      <md-data-table-column>Calories</md-data-table-column>
      <md-data-table-column>Fat</md-data-table-column>
      <md-data-table-column>Carbs</md-data-table-column>
      <md-data-table-column>Protein (g)</md-data-table-column>
      <md-data-table-row>
        <md-data-table-cell>Frozen yogurt</md-data-table-cell>
        <md-data-table-cell type="number">159</md-data-table-cell>
        <md-data-table-cell type="number">6.0</md-data-table-cell>
        <md-data-table-cell type="number">24</md-data-table-cell>
        <md-data-table-cell type="number">4.0</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Ice cream sandwich</md-data-table-cell>
        <md-data-table-cell type="number">237</md-data-table-cell>
        <md-data-table-cell type="number">9.0</md-data-table-cell>
        <md-data-table-cell type="number">37</md-data-table-cell>
        <md-data-table-cell type="number">4.3</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Eclair</md-data-table-cell>
        <md-data-table-cell type="number">262</md-data-table-cell>
        <md-data-table-cell type="number">16.0</md-data-table-cell>
        <md-data-table-cell type="number">24</md-data-table-cell>
        <md-data-table-cell type="number">6.0</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
    `;
  }
};

/** Button stories. */
export const stories = [table];
