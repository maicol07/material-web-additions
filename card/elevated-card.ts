import {customElement} from 'lit/decorators.js';

import {styles as shared} from './lib/shared.css.js';
import {styles} from './lib/elevated-card.css.js';
import {ElevatedCard} from './lib/elevated-card';

declare global {
    interface HTMLElementTagNameMap {
        'md-elevated-card': MdElevatedCard;
    }
}

@customElement('md-elevated-card')
export class MdElevatedCard extends ElevatedCard {
    static override styles = [shared, styles];
}