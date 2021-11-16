import {customElement} from 'lit/decorators.js';

import {MWCCardBase} from './mwc-card-base.js';
import {styles} from './mwc-card.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-card': MWCCard;
  }
}

@customElement('mwc-card')
export class MWCCard extends MWCCardBase {
  static override styles = [styles];
}
