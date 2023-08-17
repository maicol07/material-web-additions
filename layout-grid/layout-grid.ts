import {customElement} from 'lit/decorators.js';

import {styles} from './internal/layout-grid.css.js';
import {LayoutGrid} from './internal/layout-grid.js';
import './layout-grid-inner.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-layout-grid': MdLayoutGrid;
  }
}

@customElement('md-layout-grid')
export class MdLayoutGrid extends LayoutGrid {
  static override styles = [styles];
}
