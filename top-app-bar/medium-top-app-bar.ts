import {customElement} from 'lit/decorators.js';

import {styles as sharedStyles} from './internal/shared-styles.css.js';
import {styles} from './internal/medium-top-app-bar-styles.css.js';
import {ExpandedTopAppBar} from './internal/expanded-top-app-bar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-medium-top-app-bar': MdMediumTopAppBar;
    }
}

@customElement('md-medium-top-app-bar')
export class MdMediumTopAppBar extends ExpandedTopAppBar {
    static override styles = [sharedStyles, styles];
}
