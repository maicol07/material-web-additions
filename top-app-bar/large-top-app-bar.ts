import {customElement} from 'lit/decorators.js';

import {styles as sharedStyles} from './internal/shared-styles.css.js';
import {styles} from './internal/large-top-app-bar-styles.css.js';
import {ExpandedTopAppBar} from './internal/expanded-top-app-bar.js';

declare global {
    interface HTMLElementTagNameMap {
        'md-large-top-app-bar': MdLargeTopAppBar;
    }
}

@customElement('md-large-top-app-bar')
export class MdLargeTopAppBar extends ExpandedTopAppBar {
    static override styles = [sharedStyles, styles];
}
