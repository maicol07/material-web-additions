import {LayoutGrid} from './layout-grid';
import {html} from 'lit';

export class LayoutGridInner extends LayoutGrid {
    override getRenderClasses() {
        const classes = super.getRenderClasses();

        delete classes['mdc-layout-grid'];
        classes['mdc-layout-grid__inner'] = true;

        return classes;
    }

    override renderSlot() {
        return html`
            <slot></slot>`;
    }
}
