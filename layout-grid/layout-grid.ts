import {customElement} from 'lit/decorators.js';

import {styles} from './lib/layout-grid.css.js';
import {LayoutGrid} from './lib/layout-grid.js';
import './layout-grid-inner.js';

declare global {
  interface HTMLElementTagNameMap extends LayoutGridAttributes {
    'md-layout-grid': MdLayoutGrid;
  }

  type LayoutGridAttributes = {
    [tag: string]: {
      'grid-span'?: number,
      'grid-span-desktop'?: number,
      'grid-span-tablet'?: number,
      'grid-span-phone'?: number,
      'grid-align'?: 'top' | 'middle' | 'bottom',
      'grid-order'?: number,
    }
  }
}

@customElement('md-layout-grid')
export class MdLayoutGrid extends LayoutGrid {
  static override styles = [styles];
}
