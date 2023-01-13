import {customElement} from 'lit/decorators.js';
import {DataTableColumn} from './lib/data-table-column.js';
import {styles as columnStyles} from './lib/data-table-column.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-column': MdDataTableColumn;
  }
}

@customElement('md-data-table-column')
export class MdDataTableColumn extends DataTableColumn {
  static override styles = [columnStyles];
}
