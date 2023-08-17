import {customElement} from 'lit/decorators.js';

import {styles as shared} from '@maicol07/material-web-additions/card/internal/shared.css.js';
import {styles} from '@maicol07/material-web-additions/card/internal/elevated-card.css.js';
import {ElevatedCard} from '@maicol07/material-web-additions/card/internal/elevated-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-elevated-card': MdElevatedCard;
    }
}

@customElement('md-elevated-card')
export class MdElevatedCard extends ElevatedCard {
    static override styles = [shared, styles];
}
