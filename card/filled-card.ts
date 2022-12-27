import {customElement} from 'lit/decorators.js';

import {styles as shared} from './lib/shared.css.js';
import {styles} from './lib/filled-card.css.js';
import {FilledCard} from './lib/filled-card';

declare global {
    interface HTMLElementTagNameMap {
        'md-filled-card': MdFilledCard;
    }
}

@customElement('md-filled-card')
export class MdFilledCard extends FilledCard {
    static override styles = [shared, styles];
}
