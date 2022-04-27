import {customElement} from 'lit/decorators.js';
import {CardMediaBase} from './mwc-card-media-base';
import {styles} from './mwc-card-media.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-card-media': CardMedia;
  }
}

@customElement('mwc-card-media')
export class CardMedia extends CardMediaBase {
    static override styles = [styles];
}
