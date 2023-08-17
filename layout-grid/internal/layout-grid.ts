import {html, LitElement} from 'lit';
import {property} from 'lit/decorators/property.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';

export interface LayoutGridAttributes {
    'grid-span'?: number,
    'grid-span-desktop'?: number,
    'grid-span-tablet'?: number,
    'grid-span-phone'?: number,
    'grid-align'?: 'top' | 'middle' | 'bottom',
    'grid-order'?: number,
}

export class LayoutGrid extends LitElement {
    /**
     * You can designate each column to have a certain width. The column width can be specified through the CSS custom property `--mdc-layout-grid-column-width-{screen_size}`. The column width is set to 72px on all devices by default.
     */
    @property({type: Boolean, attribute: 'fixed-column-width'}) fixedColumnWidth = false;

    /**
     * The grid is by default center aligned. You can set this attribute to `left` or `right` to change this behavior. Note, these modifiers will have no effect when the grid already fills its container.
     */
    @property({type: String}) align: 'center' | 'left' | 'right' = 'center';

    getRenderClasses(): Record<string, boolean> {
        return {
            'mdc-layout-grid': true,
            'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
            'mdc-layout-grid--align-left': this.align === 'left',
            'mdc-layout-grid--align-right': this.align === 'right',
        };
    }

    override render() {
        return html`
            <div class="${classMap(this.getRenderClasses() as ClassInfo)}">
                ${this.renderSlot()}
            </div>
        `;
    }

    renderSlot() {
        return html`
            <md-layout-grid-inner>
                <slot></slot>
            </md-layout-grid-inner>
        `;
    }
}
