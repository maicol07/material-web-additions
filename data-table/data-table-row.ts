import {customElement} from 'lit/decorators.js';
import {DataTableRow} from '@maicol07/material-web-additions/data-table/internal/data-table-row.js';
import {styles as rowStyles} from '@maicol07/material-web-additions/data-table/internal/data-table-row.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-row': MdDataTableRow;
  }
}

@customElement('md-data-table-row')
export class MdDataTableRow extends DataTableRow {
  static override styles = [rowStyles];
}
