import {customElement} from 'lit/decorators.js';

import {DataTableBase} from './mwc-data-table-base';
import {styles as tableStyles} from './mwc-data-table.css';
import {styles as rowStyles} from './mwc-data-table-row.css';
import {styles as cellStyles} from './mwc-data-table-cell.css';
import {styles as columnStyles} from './mwc-data-table-column.css';
import {styles as footerStyles} from './mwc-data-table-footer.css';
import {DataTableColumnBase} from './mwc-data-table-column';
import {DataTableRowBase} from './mwc-data-table-row';
import {DataTableCellBase} from './mwc-data-table-cell';
import {DataTableFooterBase} from './mwc-data-table-footer';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-data-table': DataTable;
    'mwc-data-table-column': DataTableColumn;
    'mwc-data-table-row': DataTableRow;
    'mwc-data-table-cell': DataTableCell;
    'mwc-data-table-footer': DataTableFooter;
  }
}

@customElement('mwc-data-table')
export class DataTable extends DataTableBase {
  static override styles = [tableStyles];
}

@customElement('mwc-data-table-column')
export class DataTableColumn extends DataTableColumnBase {
  static override styles = [columnStyles];
}

@customElement('mwc-data-table-row')
export class DataTableRow extends DataTableRowBase {
  static override styles = [rowStyles];
}

@customElement('mwc-data-table-cell')
export class DataTableCell extends DataTableCellBase {
  static override styles = [cellStyles];
}

@customElement('mwc-data-table-footer')
export class DataTableFooter extends DataTableFooterBase {
  static override styles = [footerStyles];
}
