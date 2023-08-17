import {customElement} from 'lit/decorators.js';

import {styles as shared} from '@maicol07/material-web-additions/card/internal/shared.css.js';
import {styles} from '@maicol07/material-web-additions/card/internal/outlined-card.css.js';
import {OutlinedCard} from '@maicol07/material-web-additions/card/internal/outlined-card.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-outlined-card': MdOutlinedCard;
    }
}

@customElement('md-outlined-card')
export class MdOutlinedCard extends OutlinedCard {
    static override styles = [shared, styles];
}
