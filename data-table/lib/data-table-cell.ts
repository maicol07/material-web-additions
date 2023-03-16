import '@material/web/checkbox/checkbox.js';
import {MdCheckbox} from '@material/web/checkbox/checkbox.js';
import {html, LitElement} from 'lit';
import {property} from 'lit/decorators/property.js';
import {queryAssignedElements} from 'lit/decorators/query-assigned-elements.js';

export interface CellCheckedEventDetail {
  checked: boolean
}

export class DataTableCell extends LitElement {
  /**
   * Cell type. If `checkbox`, the checkbox inside the cell will also be created if not supplied via default slot.
   * If `numeric`, the cell text will be aligned to the right.
   */
  @property({type: String, reflect: true}) type?: '' | 'numeric' | 'checkbox';

  /** @internal */
    // @ts-ignore
  @queryAssignedElements({selector: 'md-checkbox', flatten: true}) protected checkboxSlotElements!: MdCheckbox[];

  override connectedCallback() {
    super.connectedCallback();

    this.role = 'cell';
  }

  /** @internal */
  get checkbox(): MdCheckbox | undefined {
    return this.checkboxSlotElements?.[0];
  }

  override render() {
    return html`
      <slot @slotchange=${this.onSlotChanged}>${this.renderCheckbox()}</slot>
    `;
  }

  renderCheckbox() {
    if (this.type === 'checkbox') {
      return html`<md-checkbox class="mdc-data-table__row-checkbox" @change=${this.onCheckboxClicked}></md-checkbox>`;
    }

    return '';
  }

  onSlotChanged() {
    this.requestUpdate();
    this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
    this.checkbox?.addEventListener('change', this.onCheckboxClicked);
  }

  onCheckboxClicked = (e: Event) => {
    const checkbox = e.target as MdCheckbox;
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
