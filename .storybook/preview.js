import WhatsNew from '../CHANGELOG.md';
import {withTableOfContents} from 'storybook-docs-toc';
import {setCustomElementsManifest} from '@storybook/web-components';
import customElements from '../custom-elements.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1
    },
    canvas: { title: 'Sandbox' },
    controls: { expanded: true, sort: 'requiredFirst' }
  },
  viewMode: 'docs',
  ...withTableOfContents(),
  whatsNewSource: WhatsNew
};

setCustomElementsManifest(customElements);
