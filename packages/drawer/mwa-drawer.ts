
import {Drawer as MWCDrawer} from '@material/mwc-drawer';
import {styles} from './mwa-drawer.css';
import {customElement, property} from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-drawer': Drawer;
  }
}


@customElement('mwa-drawer')
export class Drawer extends MWCDrawer {
  static styles = [...MWCDrawer.styles, styles];

  /**
   * Whether to enable or disable the Material Design Refresh style.
   */
  @property({type: Boolean, reflect: true}) md2style?: boolean;
}
