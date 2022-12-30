import {StorybookConfig} from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(ts|mdx)',
    '../!(node_modules)/stories/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    // '@ljcl/storybook-addon-cssprops',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    // 'storybook-addon-whats-new',
    'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config;
