import {customElement} from 'lit/decorators.js';

import {styles as tableStyles} from '@maicol07/material-web-additions/data-table/internal/data-table.css.js';
import {DataTable} from '@maicol07/material-web-additions/data-table/internal/data-table.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table': MdDataTable;
  }
}

@customElement('md-data-table')
export class MdDataTable extends DataTable {
  static override styles = [tableStyles];
}
