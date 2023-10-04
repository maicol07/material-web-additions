import {LayoutGrid} from './layout-grid.js';
import {html} from 'lit';

export interface LayoutGridInnerAttributes {
    'grid-span'?: number,
    'grid-span-desktop'?: number,
    'grid-span-tablet'?: number,
    'grid-span-phone'?: number,
    'grid-align'?: 'top' | 'middle' | 'bottom',
    'grid-order'?: number,
}

export class LayoutGridInner extends LayoutGrid {
    protected override getRenderClasses() {
        const classes = super.getRenderClasses();

        delete classes['mdc-layout-grid'];
        classes['mdc-layout-grid__inner'] = true;

        return classes;
    }

    protected override renderSlot() {
        return html`
            <slot></slot>`;
    }
}
