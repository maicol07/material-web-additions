// @ts-ignore
import '../../packages/icon-button/mwa-drawer.js';
import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import DocsPage from './docs.mdx';
import {Drawer} from '../../packages/drawer/mwa-drawer';

export default {
    title: 'Drawer',
    component: 'mwa-drawer',
    expanded: true,
    parameters: {
        docs: {
            page: DocsPage
        }
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const NewStyle: Story<Partial<Drawer>> = ({md2style}) => html`
    <mwa-drawer ?md2style="${md2style}"></mwa-drawer>
`;
NewStyle.args = {
    md2style: true
};
