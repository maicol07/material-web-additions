import {customElement} from 'lit/decorators.js';

import {styles as shared} from './internal/shared.css.js';
import {styles} from './internal/outlined-card.css.js';
import {OutlinedCard} from './internal/outlined-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-card': MdOutlinedCard;
    }
}

@customElement('md-outlined-card')
export class MdOutlinedCard extends OutlinedCard {
    static override styles = [shared, styles];
}
