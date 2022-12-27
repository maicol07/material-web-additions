import WhatsNew from '../CHANGELOG.md';
import {setCustomElementsManifest} from '@storybook/web-components';
import customElements from '../custom-elements.json';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        hideNoControlsWarning: true,
    }
  },
    previewTabs: {
        'storybook/docs/panel': {
            index: -1
        },
        canvas: {title: 'Sandbox'},
        controls: {expanded: true, sort: 'requiredFirst'}
    },
    docs: {
        theme
    },
    viewMode: 'docs',
    whatsNewSource: WhatsNew
};

setCustomElementsManifest(customElements);
