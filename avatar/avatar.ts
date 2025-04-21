import {customElement} from 'lit/decorators.js';

import {styles} from './internal/avatar-styles.css.js';
import {Avatar} from '@maicol07/material-web-additions/avatar/internal/avatar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-avatar': MdAvatar;
    }
}

@customElement('md-avatar')
export class MdAvatar extends Avatar {
    static override styles = [styles];
}
