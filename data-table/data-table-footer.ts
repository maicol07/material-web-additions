import {customElement} from 'lit/decorators.js';
import {DataTableColumn} from './lib/data-table-column.js';
import {styles as footerStyles} from './lib/data-table-footer.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-footer': MdDataTableFooter;
  }
}

@customElement('md-data-table-footer')
export class MdDataTableFooter extends DataTableColumn {
  static override styles = [footerStyles];
}
