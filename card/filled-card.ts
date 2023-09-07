import {customElement} from 'lit/decorators.js';

import {styles as shared} from './internal/shared-styles.css.js';
import {styles} from './internal/filled-styles.css.js';
import {FilledCard} from './internal/filled-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-filled-card': MdFilledCard;
    }
}

@customElement('md-filled-card')
export class MdFilledCard extends FilledCard {
    static override styles = [shared, styles];
}
