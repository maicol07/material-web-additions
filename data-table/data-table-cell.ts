import {customElement} from 'lit/decorators.js';
import {DataTableCell} from '@maicol07/material-web-additions/data-table/internal/data-table-cell.js';
import {styles as cellStyles} from '@maicol07/material-web-additions/data-table/internal/data-table-cell.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-cell': DataTableCell;
  }
}

@customElement('md-data-table-cell')
export class MdDataTableCell extends DataTableCell {
  static override styles = [cellStyles];
}
