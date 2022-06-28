module.exports = {
  features: {
    previewMdx2: true,
  },
  stories: [
    '../stories/**/*.stories.@(ts|mdx)'
  ],
  core: {
    builder: 'webpack5'
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@ljcl/storybook-addon-cssprops',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-whats-new',
    'storybook-dark-mode'
  ],
  framework: '@storybook/web-components'
};
