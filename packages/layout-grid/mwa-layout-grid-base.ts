import {html, LitElement} from 'lit';
import {property, query} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';

export class LayoutGridBase extends LitElement {
  /**
   * Mandatory if the grid is inside another grid.
   */
  @property({type: Boolean}) inner = false;

  /**
   * You can designate each column to have a certain width. The column width can be specified through the CSS custom property `--mdc-layout-grid-column-width-{screen_size}`. The column width is set to 72px on all devices by default.
   */
  @property({type: Boolean}) fixedColumnWidth = false;

  /**
   * The grid is by default center aligned. You can set this attribute to `left` or `right` to change this behavior. Note, these modifiers will have no effect when the grid already fills its container.
   */
  @property({type: String}) align: '' | 'left' | 'right' = '';

  /**
   * @internal
   * @protected
   */
  @query('slot') protected defaultSlot!: HTMLSlotElement;

  getRenderClasses(): ClassInfo {
    return {
      'mdc-layout-grid': !this.inner,
      'mdc-layout-grid__inner': this.inner,
      'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
      'mdc-layout-grid--align-left': this.align === 'left',
      'mdc-layout-grid--align-right': this.align === 'right',
    };
  }

  render() {
    const slot = this.inner ? html`<slot></slot>` : html`
      <div class="mdc-layout-grid__inner">
        <slot></slot>
      </div>
    `;

    return html`
        <div class="${classMap(this.getRenderClasses())}">
            ${slot}
        </div>
    `;
  }
}
