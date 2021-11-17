import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';

export class LayoutGridCellBase extends LitElement {
  @property({type: Number}) span;
  @property({type: Number, attribute: 'span-desktop'}) spanDesktop;
  @property({type: Number, attribute: 'span-tablet'}) spanTablet;
  @property({type: Number, attribute: 'span-phone'}) spanPhone;
  @property({type: Number}) order;
  @property({type: String}) align;

  render() {
    return html`<slot></slot>`;
  }
}
