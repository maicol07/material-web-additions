import {customElement} from 'lit/decorators.js';
import {DataTableCell} from './lib/data-table-cell.js';
import {styles as cellStyles} from './lib/data-table-cell.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-cell': DataTableCell;
  }
}

@customElement('md-data-table-cell')
export class MdDataTableCell extends DataTableCell {
  static override styles = [cellStyles];
}
