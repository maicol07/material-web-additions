import {StorybookConfig} from '@storybook/web-components-vite';
import {mergeConfig} from 'vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(ts|mdx)',
    '../!(node_modules)/stories/*.stories.@(ts|mdx)'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
     assetsInclude: ['**/*.md']
    });
  },
  docs: {
    autodocs: true
  }
};

export default config;
