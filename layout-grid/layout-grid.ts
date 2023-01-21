import {customElement} from 'lit/decorators.js';

import {styles} from './lib/layout-grid.css.js';
import {LayoutGrid} from './lib/layout-grid.js';
import './layout-grid-inner.js';

declare global {
  interface HTMLElementTagNameMap extends LayoutGridAttributesMap {
    'md-layout-grid': MdLayoutGrid;
  }

  type LayoutGridAttributesMap = {
    [tag: string]: LayoutGridAttributes;
  }

  type LayoutGridAttributes = {
    'grid-span'?: number,
    'grid-span-desktop'?: number,
    'grid-span-tablet'?: number,
    'grid-span-phone'?: number,
    'grid-align'?: 'top' | 'middle' | 'bottom',
    'grid-order'?: number,
  }
}

@customElement('md-layout-grid')
export class MdLayoutGrid extends LayoutGrid {
  static override styles = [styles];
}
