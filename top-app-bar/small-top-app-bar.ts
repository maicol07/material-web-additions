import {customElement} from 'lit/decorators.js';

import {styles as sharedStyles} from './internal/shared-styles.css.js';
import {styles} from './internal/small-top-app-bar-styles.css.js';
import {TopAppBar} from './internal/top-app-bar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-small-top-app-bar': MdSmallTopAppBar;
    }
}

@customElement('md-small-top-app-bar')
export class MdSmallTopAppBar extends TopAppBar {
    static override styles = [sharedStyles, styles];
}
