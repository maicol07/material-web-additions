// @ts-ignore
import '../../packages/icon-button/mwa-icon-button.js';
import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {IconButton} from '../../packages/icon-button';
import DocsPage from './docs.mdx';

export default {
    title: 'Icon Button',
    component: 'mwa-icon-button',
    expanded: true,
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        density: {
            control: 'select',
            options: ['', 'tight', 'comfortable', 'dense', 'compact', 'extra-compact']
        }
    },
    parameters: {
        docs: {
            page: DocsPage
        }
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const WithDensity: Story<Partial<IconButton>> = ({density, icon}) => html`
    <mwa-icon-button density="${density}" icon="${icon}"></mwa-icon-button>
`;
WithDensity.args = {
    icon: 'favorite'
};
