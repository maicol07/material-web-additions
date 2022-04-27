import {customElement} from 'lit/decorators.js';

import {CardBase} from './mwc-card-base';
import {styles} from './mwc-card.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-card': MWCCard;
  }
}

@customElement('mwc-card')
export class MWCCard extends CardBase {
  static override styles = [styles];
}
