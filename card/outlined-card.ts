import {customElement} from 'lit/decorators.js';

import {styles as shared} from './lib/shared.css.js';
import {styles} from './lib/outlined-card.css.js';
import {OutlinedCard} from './lib/outlined-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-card': MdOutlinedCard;
    }
}

@customElement('md-outlined-card')
export class MdOutlinedCard extends OutlinedCard {
    static override styles = [shared, styles];
}
