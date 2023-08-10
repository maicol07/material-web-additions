import {html, LitElement, nothing, PropertyValues} from 'lit';
import {property} from 'lit/decorators/property.js';
import {queryAssignedElements} from 'lit/decorators/query-assigned-elements.js';
import {query} from 'lit/decorators/query.js';
import {TextField} from '@material/web/textfield/internal/text-field.js';
import {IconButton} from '@material/web/iconbutton/internal/icon-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import {CellCheckedEventDetail} from './data-table-cell.js';
import {Checkbox} from '@material/web/checkbox/internal/checkbox.js';

export interface FilterTextFieldInputEventDetail {
  field: TextField,
  text: string,
  column: DataTableColumn,
  caseSensitive: boolean,
  customFiltering: boolean
}

export interface FilterTextFieldKeyDownEventDetail {
  field: TextField,
  key: string,
  column: DataTableColumn,
}

export interface SortButtonClickedEventDetail {
  column: DataTableColumn,
  isDescending: boolean,
  customSorting: boolean,
}

export class DataTableColumn extends LitElement {
  /**
   * Column type. If `checkbox`, the checkbox inside the column will be also created if not supplied via the default slot.
   * If `numeric`, the column label will be aligned to the right.
   */
  @property({type: String, reflect: true}) type: '' | 'numeric' | 'checkbox' = '';
  /**
   * Whether the column can be sorted.
   */
  @property({type: Boolean, reflect: true}) sortable = false;
  /**
   * Whether the column is sorted.
   */
  @property({type: Boolean, reflect: true}) sorted = false;
  /**
   * Whether the column is sorted descending.
   */
  @property({type: Boolean, reflect: true, attribute: 'sorted-descending'}) sortedDescending = false;
  /**
   * Whether the column is displaying a sort button.
   */
  @property({type: Boolean, reflect: true, attribute: 'with-sort-button'}) withSortButton = false;
  /**
   * Whether the column is using a custom sorting function. If true, the column will not sort automatically and
   * you will need to handle the sorting yourself (see `sort` event).
   */
  @property({type: Boolean, attribute: 'custom-sorting'}) customSorting = false;
  /**
   * Whether the column can be filtered.
   */
  @property({type: Boolean, reflect: true}) filterable = false;
  /**
   * Label to show on the filter textfield.
   */
  @property({type: String, attribute: 'filter-text-field-label'}) filterTextFieldLabel = 'Filter';
  /**
   * Sets the filtering to be case-sensitive.
   */
  @property({type: Boolean, reflect: true, attribute: 'filter-case-sensitive'}) filterCaseSensitive = false;
  /**
   * Whether the column is using a custom filtering function. If true, the column will not filter automatically and
   * you will need to handle the filtering yourself (see `filter` event).
   */
  @property({type: Boolean, attribute: 'custom-filtering'}) customFiltering = false;

  /** @internal */
  @query('md-standard-icon-button') sortButton?: IconButton;
  /** @internal */
  @queryAssignedElements({slot: 'checkbox', flatten: true}) protected checkboxSlotElements!: Checkbox[];

  override connectedCallback() {
    super.connectedCallback();

    this.role = 'column-header';
    this.slot = 'header-cell';
  }

  /** @internal */
  get checkbox(): Checkbox | undefined {
    return this.checkboxSlotElements?.[0];
  }

  constructor() {
    super();
    this.addEventListener('click', () => {
      this.withSortButton = !this.withSortButton;
    });
  }

  override render() {
    return html`
        ${this.renderCheckbox()}
        ${this.renderSlot()}
    `;
  }

  renderCheckbox() {
    if (this.type === 'checkbox') {
      return html`
          <slot name="checkbox" @slotchange=${this.onCheckboxSlotChanged}>
              <md-checkbox
                      class="mdc-data-table__header-row-checkbox"
                      @change=${this.onCheckboxClicked}
                      aria-label="Toggle all rows"></md-checkbox>
          </slot>
      `;
    }
    return '';
  }

  renderFilterTextField() {
    if (this.filterable && this.type !== 'checkbox') {
      return html`
          <slot name="filter-textfield" class="mdc-data-table__filter-textfield">
              <md-outlined-text-field
                      label="${this.filterTextFieldLabel}"
                      style="--md-outlined-text-field-top-space: var(--_pagination-outlined-select-field-top-space); --md-outlined-text-field-bottom-space: var(--_pagination-outlined-select-field-bottom-space);"
                      @input=${this.onFilterTextFieldInput}
                      @keydown=${this.onFilterTextFieldKeyDown}
                      @click="${(e: PointerEvent) => e.stopPropagation()}"
              />
          </slot>
      `;
    }
    return nothing;
  }

  renderSlot() {
    return html`
        <div class="mdc-data-table__header-cell-filter-wrapper">
            ${this.sortable ? this.renderSortButton() : html`
                <slot class="mdc-data-table__header-cell-label"></slot>`}
            ${this.renderFilterTextField()}
        </div>
    `;
  }

  renderSortButton() {
    return html`
        <div class="mdc-data-table__header-cell-wrapper">
            <md-standard-icon-button ?selected=${this.sortedDescending}
                                     toggle
                                     @change=${this.onSortButtonClicked}
                                     @click="${(e: PointerEvent) => e.stopPropagation()}"
                                     aria-hidden="${this.withSortButton ? 'false' : 'true'}"
                                     ?hidden="${!this.withSortButton}">
                <slot name="sort-icon-on" slot="selectedIcon">
                    <md-icon>arrow_downward</md-icon>
                </slot>
                <slot name="sort-icon-off">
                    <md-icon>arrow_upward</md-icon>
                </slot>
            </md-standard-icon-button>
            &nbsp;
            <slot class="mdc-data-table__header-cell-label"></slot>
        </div>
    `;
  }

  /** @internal */
  onCheckboxClicked(e: Event) {
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
  }

  onCheckboxSlotChanged() {
    this.checkbox?.removeEventListener('change', this.onCheckboxClicked);
    this.checkbox?.addEventListener('change', this.onCheckboxClicked);
  }

  /** @internal */
  onFilterTextFieldInput(e: InputEvent) {
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
        caseSensitive: this.filterCaseSensitive,
        customFiltering: this.customFiltering
      }
    }));
  }

  /** @internal */
  onFilterTextFieldKeyDown(e: KeyboardEvent) {
    const textfield = e.target as TextField;
    /**
     * Event emitted when the user has typed in column filter textfield.
     *
     * Event detail: `FilterTextFieldKeyDownEventDetail`;
     */
    this.dispatchEvent(new CustomEvent<FilterTextFieldKeyDownEventDetail>('keydown', {
      detail: {
        field: textfield,
        key: e.key,
        column: this,
      }
    }));
  }

  /** @internal */
  onSortButtonClicked(e: Event) {
    this.sortedDescending = this.sortButton.selected;
    /**
     * Event emitted when the user has typed in column filter textfield.
     *
     * Event detail: `SortButtonClickedEventDetail`;
     */
    this.dispatchEvent(new CustomEvent<SortButtonClickedEventDetail>('sort', {
      detail: {
        column: this,
        isDescending: this.sortedDescending,
        customSorting: this.customSorting
      }
    }));
  }

  protected override updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has('sorted')) {
      this.withSortButton = this.sortable && this.sorted;
    }
    super.updated(_changedProperties);
  }
}
