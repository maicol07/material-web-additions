import {customElement} from 'lit/decorators.js';

import {DataTableBase} from './mwa-data-table-base';
import {styles as tableStyles} from './mwa-data-table.css';
import {styles as rowStyles} from './mwa-data-table-row.css';
import {styles as cellStyles} from './mwa-data-table-cell.css';
import {styles as columnStyles} from './mwa-data-table-column.css';
import {styles as footerStyles} from './mwa-data-table-footer.css';
import {DataTableColumnBase} from './mwa-data-table-column';
import {DataTableRowBase} from './mwa-data-table-row';
import {DataTableCellBase} from './mwa-data-table-cell';
import {DataTableFooterBase} from './mwa-data-table-footer';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-data-table': DataTable;
    'mwa-data-table-column': DataTableColumn;
    'mwa-data-table-row': DataTableRow;
    'mwa-data-table-cell': DataTableCell;
    'mwa-data-table-footer': DataTableFooter;
  }
}

@customElement('mwa-data-table')
export class DataTable extends DataTableBase {
  static override styles = [tableStyles];
}

@customElement('mwa-data-table-column')
export class DataTableColumn extends DataTableColumnBase {
  static override styles = [columnStyles];
}

@customElement('mwa-data-table-row')
export class DataTableRow extends DataTableRowBase {
  static override styles = [rowStyles];
}

@customElement('mwa-data-table-cell')
export class DataTableCell extends DataTableCellBase {
  static override styles = [cellStyles];
}

@customElement('mwa-data-table-footer')
export class DataTableFooter extends DataTableFooterBase {
  static override styles = [footerStyles];
}
