import {html, LitElement} from 'lit';

export class DataTableFooterBase extends LitElement {
  /** @internal */
  slot = 'footer';

  render() {
    return html`
      <div class="mdc-data-table__footer" role="rowgroup">
        <slot></slot>
      </div>
    `;
  }
}
