import {customElement} from 'lit/decorators.js';
import {DataTableRow} from './internal/data-table-row.js';
import {styles as rowStyles} from './internal/data-table-row.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-row': MdDataTableRow;
  }
}

@customElement('md-data-table-row')
export class MdDataTableRow extends DataTableRow {
  static override styles = [rowStyles];
}
