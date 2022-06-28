import {customElement} from 'lit/decorators.js';

import {LayoutGridBase} from './mwa-layout-grid-base';
import {styles} from './mwa-layout-grid.css';
import {DOMAttributes} from 'react';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-layout-grid': LayoutGrid;
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

@customElement('mwa-layout-grid')
export class LayoutGrid extends LayoutGridBase {
  static override styles = [styles];
}
