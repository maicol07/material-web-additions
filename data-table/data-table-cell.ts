import {customElement} from 'lit/decorators.js';
import {DataTableCell} from './internal/data-table-cell.js';
import {styles as cellStyles} from './internal/data-table-cell.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-cell': DataTableCell;
  }
}

@customElement('md-data-table-cell')
export class MdDataTableCell extends DataTableCell {
  static override styles = [cellStyles];
}
