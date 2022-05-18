import {html, LitElement} from 'lit';
import {property, queryAssignedElements} from 'lit/decorators.js';
import {DataTableCell} from './mwc-data-table';
import {CellCheckedEventDetail} from './mwc-data-table-cell';

export interface RowCheckedEventDetail {
  selected: boolean;
}

export class DataTableRowBase extends LitElement {
  /**
   * Whether the row is selected.
   */
  @property({type: Boolean, reflect: true}) selected = false;
  /** @internal */
  slot = 'row';

  /**
   * Cells of the row.
   */
  @queryAssignedElements({selector: 'mwc-data-table-cell'}) cells!: DataTableCell[];
  /**
   * Overall height of the table. Available in three different measures.
   */
  @property({type: String, reflect: true})
  density?: '' | 'tight' | 'comfortable' | 'dense' | 'compact';
  /** @internal */
  @queryAssignedElements({selector: 'mwc-data-table-cell[type="checkbox"]'}) protected checkboxCells!: DataTableCell[];

  /** @internal */
  get checkboxCell(): DataTableCell | undefined {
    return this.checkboxCells?.[0];
  }

  render() {
    return html`<slot></slot>`;
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

  protected updated(_changedProperties) {
    super.updated(_changedProperties);

    const checkboxCell = this.checkboxCell;
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
