import {customElement} from 'lit/decorators.js';

import {styles} from './internal/snackbar-styles.css.js';
import {Snackbar} from '@maicol07/material-web-additions/snackbar/internal/snackbar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-snackbar': MdSnackbar;
    }
}

@customElement('md-snackbar')
export class MdSnackbar extends Snackbar {
    static override styles = [styles];
}
