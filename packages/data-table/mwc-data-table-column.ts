import {Checkbox} from '@material/mwc-checkbox';

import {html, LitElement} from 'lit';
import {property, query, queryAssignedElements} from 'lit/decorators.js';
import {TextField} from '@material/mwc-textfield';
import {IconButtonToggle} from '@material/mwc-icon-button-toggle';
import '@material/mwc-textfield';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-checkbox';
import '@material/mwc-icon';
import {CellCheckedEventDetail} from './mwc-data-table-cell';

export interface FilterTextFieldInputEventDetail {
  field: TextField,
  text: string,
  column: DataTableColumnBase,
  caseSensitive: boolean
}

export class DataTableColumnBase extends LitElement {
  /**
   * Column type. If `checkbox`, the checkbox inside the column will be also created if not supplied via the default slot.
   * If `numeric`, the column label will be aligned to the right.
   */
  @property({type: String}) type: '' | 'numeric' | 'checkbox' = '';
  /**
   * Whether the column can be sorted.
   */
  @property({type: Boolean}) sortable = false;
  /**
   * Whether the column is sorted.
   */
  @property({type: Boolean, reflect: true}) sorted = false;
  /**
   * Whether the column is sorted descending.
   */
  @property({type: Boolean, reflect: true}) sortedDescending = false;
  /**
   * Whether the column is displaying a sort button.
   */
  @property({type: Boolean, reflect: true}) withSortButton = false;

  /**
   * Whether the column can be filtered.
   */
  @property({type: Boolean, reflect: true}) filterable = false;
  /**
   * Label to show on the filter textfield.
   */
  @property({type: String}) filterTextFieldLabel = 'Filter';
  /**
   * Sets the filtering to be case-sensitive.
   */
  @property({type: Boolean, reflect: true}) filterCaseSensitive = false;

  /** @internal */
  slot = 'header-cell';

  /** @internal */
  @query('mwc-icon-button-toggle') sortButton?: IconButtonToggle;
  /** @internal */
  @queryAssignedElements({slot: 'checkbox', flatten: true}) protected checkboxSlotElements!: Checkbox[];

  /** @internal */
  get checkbox(): Checkbox | undefined {
    return this.checkboxSlotElements?.[0];
  }

  render() {
    return html`
        ${this.renderCheckbox()}
        ${this.renderFilterTextField()}
        ${this.renderSlot()}
    `;
  }

  renderCheckbox() {
    if (this.type === 'checkbox') {
      return html`
          <slot name="checkbox" @slotchange=${this.onCheckboxSlotChanged}>
              <mwc-checkbox
                      class="mdc-data-table__header-row-checkbox"
                      @change=${this.onCheckboxClicked}
                      aria-label="Toggle all rows"></mwc-checkbox>
          </slot>
      `;
    }
    return;
  }

  renderFilterTextField() {
    if (this.filterable && this.type !== 'checkbox') {
      return html`
          <div class="mdc-data-table__header-cell-filter-wrapper">
              <slot class="mdc-data-table__header-cell-label"></slot>
              <slot name="filter-textfieldfilter-textfield" class="mdc-data-table__filter-textfield">
                  <mwc-textfield
                          outlined
                          label="${this.filterTextFieldLabel}"
                          compact
                          @input=${this.onFilterTextFieldInput}
                  />
              </slot>
          </div>
      `;
    }
    return;
  }

  renderSlot() {
    if (this.sortable) {
      // noinspection AssignmentResultUsedJS
      return html`
          <div class="mdc-data-table__header-cell-wrapper" @click=${() => this.withSortButton = !this.withSortButton}>
              <mwc-icon-button-toggle class="mdc-data-table__sort-icon-button" ?on=${this.sortedDescending} @click=${() => undefined/* this.sortDesc = !this.sortDesc*/} ?hidden=${!this.withSortButton} style="--mdc-icon-button-size: 28px;">
                  <slot name="sort-icon-on" slot="onIcon">
                      <mwc-icon>arrow_downward</mwc-icon>
                  </slot>
                  <slot name="sort-icon-off" slot="offIcon">
                      <mwc-icon>arrow_upward</mwc-icon>
                  </slot>
              </mwc-icon-button-toggle>
              &nbsp;
              <slot class="mdc-data-table__header-cell-label"></slot>
          </div>
      `;
    }

    return html`<slot></slot>`;
  }

  onCheckboxSlotChanged() {
    this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
    this.checkbox?.addEventListener('change', this.onCheckboxClicked);
  }

  /** @internal */
  onCheckboxClicked = (e: Event) => {
    const checkbox = e.target as Checkbox;
    /**
     * Event emitted when the column checkbox has been checked or unchecked.
     *
     * Event detail: `CellCheckedEventDetail`;
     */
    this.dispatchEvent(new CustomEvent<CellCheckedEventDetail>('checked', {
      detail: {
        checked: checkbox.checked ?? false
      }
    }));
  };

  /** @internal */
  onFilterTextFieldInput = (e: InputEvent) => {
    const textfield = e.target as TextField;
    /**
     * Event emitted when the user has typed in column filter textfield.
     *
     * Event detail: `FilterTextFieldInputEventDetail`;
     */
    this.dispatchEvent(new CustomEvent<FilterTextFieldInputEventDetail>('filter', {
      detail: {
        field: textfield,
        text: textfield.value,
        column: this,
        caseSensitive: this.filterCaseSensitive
      }
    }));
  };
}
