import '@material/web/checkbox/checkbox.js';
import {MdCheckbox} from '@material/web/checkbox/checkbox.js';
import {html, LitElement} from 'lit';
import {property} from 'lit/decorators/property.js';
import {queryAssignedElements} from 'lit/decorators/query-assigned-elements.js';

export interface CellCheckedEventDetail {
  checked: boolean
}

/**
 * @fires checked - Event emitted when the cell checkbox has been checked or unchecked. Detail contains the `checked` property.
 */
export class DataTableCell extends LitElement {
  /**
   * Cell type. If `checkbox`, the checkbox inside the cell will also be created if not supplied via default slot.
   * If `numeric`, the cell text will be aligned to the right.
   */
  @property({type: String, reflect: true}) type?: '' | 'numeric' | 'checkbox';

  /** @internal */
  @queryAssignedElements({selector: 'md-checkbox', flatten: true}) protected checkboxSlotElements!: MdCheckbox[];

  override connectedCallback() {
    super.connectedCallback();

    this.role = 'cell';
  }

  /** @internal */
  get checkbox(): MdCheckbox | undefined {
    return this.checkboxSlotElements?.[0];
  }

  protected override render() {
    return html`
      <slot @slotchange=${this.onSlotChanged}>${this.renderCheckbox()}</slot>
    `;
  }

  protected renderCheckbox() {
    if (this.type === 'checkbox') {
      return html`<md-checkbox class="mdc-data-table__row-checkbox" touch-target="wrapper" @change=${this.onCheckboxClicked}></md-checkbox>`;
    }

    return '';
  }

  protected onSlotChanged() {
    this.requestUpdate();
    this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
    this.checkbox?.addEventListener('change', this.onCheckboxClicked);
  }

  protected onCheckboxClicked = (e: Event) => {
    const checkbox = e.target as MdCheckbox;
    this.dispatchEvent(new CustomEvent<CellCheckedEventDetail>('checked', {
      detail: {
        checked: checkbox.checked
      }
    }));
  };
}
