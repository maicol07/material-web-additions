/**
 * Configures Storybook's "manager" UI that wraps the preview and configures addons panel.
 */

import {addons} from '@storybook/addons';
import customTheme from './theme';

addons.setConfig({
    panelPosition: 'bottom',
    theme: customTheme,
    sidebar: {
        showRoots: true,
        collapsedRoots: ['input', 'buttons', 'structure', 'graphic', 'notification'],
    },
});
