import {customElement} from 'lit/decorators/custom-element.js';

import * as styles from './internal/layout-grid.css.js';
import {LayoutGridInner} from './internal/layout-grid-inner.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-layout-grid-inner': MdLayoutGridInner;
  }
}

@customElement('md-layout-grid-inner')
export class MdLayoutGridInner extends LayoutGridInner {
  static override styles = [styles.styles];
}
