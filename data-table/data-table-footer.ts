import {customElement} from 'lit/decorators.js';
import {styles as footerStyles} from '@maicol07/material-web-additions/data-table/internal/data-table-footer.css.js';
import {DataTableFooter} from '@maicol07/material-web-additions/data-table/internal/data-table-footer.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-data-table-footer': MdDataTableFooter;
  }
}

@customElement('md-data-table-footer')
export class MdDataTableFooter extends DataTableFooter {
  static override styles = [footerStyles];
}
