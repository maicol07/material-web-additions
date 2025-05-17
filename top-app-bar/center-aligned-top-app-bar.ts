import {customElement} from 'lit/decorators.js';

import {styles as sharedStyles} from './internal/shared-styles.css.js';
import {styles} from './internal/center-aligned-top-app-bar-styles.css.js';
import {TopAppBar} from './internal/top-app-bar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-center-aligned-top-app-bar': MdCenterAlignedTopAppBar;
    }
}

/**
 * @deprecated Due to new M3 expressive design update
 */
@customElement('md-center-aligned-top-app-bar')
export class MdCenterAlignedTopAppBar extends TopAppBar {
    static override styles = [sharedStyles, styles];
}
