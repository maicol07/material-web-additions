import {customElement} from 'lit/decorators.js';

import {styles as shared} from './internal/shared.css.js';
import {styles} from './internal/elevated-card.css.js';
import {ElevatedCard} from './internal/elevated-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-elevated-card': MdElevatedCard;
    }
}

@customElement('md-elevated-card')
export class MdElevatedCard extends ElevatedCard {
    static override styles = [shared, styles];
}
