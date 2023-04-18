import {html, LitElement, PropertyValueMap} from 'lit';
import {CellCheckedEventDetail, DataTableCell} from './data-table-cell.js';
import {property} from 'lit/decorators/property.js';
import {queryAssignedElements} from 'lit/decorators/query-assigned-elements.js';

export interface RowCheckedEventDetail {
  selected: boolean;
}

export class DataTableRow extends LitElement {
  /**
   * Whether the row is selected.
   */
  @property({type: Boolean, reflect: true}) selected = false;
  /**
   * Overall height of the table. Available in three different measures.
   */
  @property({type: String, reflect: true}) density?: '' | 'tight' | 'comfortable' | 'dense' | 'compact';

  /**
   * Cells of the row.
   * @internal
   */
  @queryAssignedElements({selector: 'md-data-table-cell'}) cells!: DataTableCell[];
  /**
   * Cells with type `checkbox`.
   *
   * @internal
   */
  @queryAssignedElements({selector: 'md-data-table-cell[type="checkbox"]'}) protected checkboxCells!: DataTableCell[];

  override connectedCallback() {
    super.connectedCallback();

    this.role = 'row';
    this.slot = 'row';
  }

  /** @internal */
  get checkboxCell(): DataTableCell | undefined {
    return this.checkboxCells?.[0];
  }

  override render() {
    return html`
      <slot @slotchange="${this.requestUpdate}"></slot>`;
  }

  /** @internal */
  onCheckboxClicked = (e: Event) => {
    const event = e as CustomEvent<CellCheckedEventDetail>;
    this.selected = event.detail.checked;
    /**
     * Event emitted when a row has been selected or unselected.
     *
     * Event detail: `RowCheckedEventData`.
     */
    this.dispatchEvent(new CustomEvent<RowCheckedEventDetail>('selected', {
      detail: {
        selected: event.detail.checked
      }
    }));
  };

  protected override updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.updated(_changedProperties);

    const checkboxCell = this.checkboxCell;
    if (!checkboxCell && this.checkboxCells.length === 0) {
      // Wait for the checkbox cell to be created
      for (const cell of this.cells) {
        cell.updateComplete.then(() => {
          if (!this.checkboxCell && cell.type === 'checkbox') {
            this.requestUpdate();
          }
        });
      }
    }

    if (checkboxCell) {
      checkboxCell.removeEventListener('checked', this.onCheckboxClicked);
      checkboxCell.addEventListener('checked', this.onCheckboxClicked);

      const checkbox = checkboxCell.checkbox;
      if (checkbox) {
        checkbox.checked = this.selected;
      }
    }
  }
}
