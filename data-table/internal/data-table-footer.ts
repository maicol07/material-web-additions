import {html, LitElement} from 'lit';

export class DataTableFooter extends LitElement {
  override connectedCallback() {
    super.connectedCallback();

    this.role = 'rowgroup';
    this.slot = 'footer';
  }

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
