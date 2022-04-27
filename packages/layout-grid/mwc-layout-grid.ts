import {customElement} from 'lit/decorators.js';

import {LayoutGridBase} from './mwc-layout-grid-base.js';
import {styles} from './mwc-layout-grid.css';
import {DOMAttributes} from 'react';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-layout-grid': LayoutGrid;
  }

  interface HTMLAttributes<T> extends DOMAttributes<T> {
    'grid-span'?: number;
    'grid-span-desktop'?: number;
    'grid-span-tablet'?: number;
    'grid-span-phone'?: number;
    'grid-align'?: 'top' | 'middle' | 'bottom';
    'grid-order'?: number;
  }
}

@customElement('mwc-layout-grid')
export class LayoutGrid extends LayoutGridBase {
  static override styles = [styles];
}
