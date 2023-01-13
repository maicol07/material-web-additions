import {html, LitElement} from 'lit';

export class DataTableFooter extends LitElement {
  /** @internal */
  override slot = 'footer';

  override render() {
    return html`
      <div class="mdc-data-table__footer" role="rowgroup">
        <slot></slot>
      </div>
    `;
  }
}
