import {customElement} from 'lit/decorators.js';
import {styles as footerStyles} from './lib/data-table-footer.css.js';
import {DataTableFooter} from './lib/data-table-footer.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-footer': MdDataTableFooter;
  }
}

@customElement('md-data-table-footer')
export class MdDataTableFooter extends DataTableFooter {
  static override styles = [footerStyles];
}
