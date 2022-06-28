import {customElement} from 'lit/decorators.js';
import {CardMediaBase} from './mwa-card-media-base';
import {styles} from './mwa-card-media.css';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-card-media': CardMedia;
  }
}

@customElement('mwa-card-media')
export class CardMedia extends CardMediaBase {
    static override styles = [styles];
}
