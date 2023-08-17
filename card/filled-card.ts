import {customElement} from 'lit/decorators.js';

import {styles as shared} from '@maicol07/material-web-additions/card/internal/shared.css.js';
import {styles} from '@maicol07/material-web-additions/card/internal/filled-card.css.js';
import {FilledCard} from '@maicol07/material-web-additions/card/internal/filled-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-filled-card': MdFilledCard;
    }
}

@customElement('md-filled-card')
export class MdFilledCard extends FilledCard {
    static override styles = [shared, styles];
}
