
import {TopAppBar as MWCTopAppBar} from '@material/mwc-top-app-bar';
import {styles} from './mwa-top-app-bar.css';
import {customElement} from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-topappbar': TopAppBar;
  }
}


@customElement('mwa-topappbar')
export class TopAppBar extends MWCTopAppBar {
  static styles = [...MWCTopAppBar.styles, styles];
}
