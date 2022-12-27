import {customElement} from 'lit/decorators/custom-element.js';

import * as styles from './lib/layout-grid.css.js';
import {LayoutGridInner} from './lib/layout-grid-inner.js';

declare global {
    interface HTMLElementTagNameMap extends LayoutGridInnerAttributes {
        'md-layout-grid-inner': MdLayoutGridInner;
    }

    type LayoutGridInnerAttributes = {
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

@customElement('md-layout-grid-inner')
export class MdLayoutGridInner extends LayoutGridInner {
    static override styles = [styles.styles];
}
