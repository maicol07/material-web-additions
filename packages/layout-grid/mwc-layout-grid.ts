import {customElement} from 'lit/decorators.js';

import {LayoutGridBase} from './mwc-layout-grid-base.js';
import {LayoutGridCellBase} from './mwc-layout-grid-cell.js';
import {styles} from './mwc-layout-grid-css.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-layout-grid': LayoutGrid;
    'mwc-layout-grid-cell': LayoutGridCell;
  }
}

@customElement('mwc-layout-grid')
export class LayoutGrid extends LayoutGridBase {
  static override styles = [styles];
}

@customElement('mwc-layout-grid-cell')
export class LayoutGridCell extends LayoutGridCellBase {}
