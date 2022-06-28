import {Checkbox} from '@material/mwc-checkbox';
import {html, LitElement} from 'lit';
import {property, queryAssignedElements} from 'lit/decorators.js';

export interface CellCheckedEventDetail {
  checked: boolean
}

export class DataTableCellBase extends LitElement {
  /**
   * Cell type. If `checkbox`, the checkbox inside the cell will also be created if not supplied via default slot.
   * If `numeric`, the cell text will be aligned to the right.
   */
  @property({type: String, reflect: true}) type?: '' | 'numeric' | 'checkbox';

  /** @internal */
  @queryAssignedElements({selector: 'mwc-checkbox', flatten: true}) protected checkboxSlotElements!: Checkbox[];

  /** @internal */
  get checkbox(): Checkbox | undefined {
    return this.checkboxSlotElements?.[0];
  }

  render() {
    return html`
      <slot @slotchange=${this.onSlotChanged}>${this.renderCheckbox()}</slot>
    `;
  }

  renderCheckbox() {
    if (this.type === 'checkbox') {
      return html`<mwc-checkbox class="mdc-data-table__row-checkbox" @change=${this.onCheckboxClicked}></mwc-checkbox>`;
    }

    return;
  }

  onSlotChanged() {
    this.requestUpdate();
    this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
    this.checkbox?.addEventListener('change', this.onCheckboxClicked);
  }

  onCheckboxClicked = (e: Event) => {
    const checkbox = e.target as Checkbox;
    /**
     * Event emitted when the cell checkbox has been checked or unchecked.
     *
     * Event detail: `CellCheckedEventDetail`.
     */
    this.dispatchEvent(new CustomEvent<CellCheckedEventDetail>('checked', {
      detail: {
        checked: checkbox.checked
      }
    }));
  };
}
