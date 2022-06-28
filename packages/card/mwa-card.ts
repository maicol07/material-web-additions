import {customElement} from 'lit/decorators.js';

import {CardBase} from './mwa-card-base';
import {styles} from './mwa-card.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-card': MWCCard;
  }
}

@customElement('mwa-card')
export class MWCCard extends CardBase {
  static override styles = [styles];
}
