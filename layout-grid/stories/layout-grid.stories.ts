import '../layout-grid.js';
import {Meta, StoryObj} from '@storybook/web-components';
import {MdLayoutGrid} from '../layout-grid.js';
import {html} from 'lit';
import './styles.scss';
import DocsPage from './docs.mdx';
import dedent from 'ts-dedent';

type LayoutGridStory = StoryObj<Partial<MdLayoutGrid>>;

const meta: Meta = {
  title: 'Layout Grid',
  component: 'md-layout-grid',
  subcomponents: {
    LayoutGridInner: 'md-layout-grid-inner',
  },
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    align: {
      control: 'select',
      options: ['center', 'left', 'right'],
    },
  },
  args: {
    fixedColumnWidth: false,
  },
  parameters: {
    cssprops: {
      'mdc-layout-grid-margin-desktop': {
        value: '24px',
        description:
            'Space between the edge of the grid and the edge of the first cell for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-gutter-desktop': {
        value: '24px',
        description: 'Space between edges of adjacent cells for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-column-width-desktop': {
        value: '72px',
        description: 'Column width for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-margin-tablet': {
        value: '16px',
        description:
            'Space between the edge of the grid and the edge of the first cell for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-gutter-tablet': {
        value: '16px',
        description: 'Space between edges of adjacent cells for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-column-width-tablet': {
        value: '72px',
        description: 'Column width for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-margin-phone': {
        value: '16px',
        description:
            'Space between the edge of the grid and the edge of the first cell for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-gutter-phone': {
        value: '16px',
        description: 'Space between edges of adjacent cells for `desktop` device.',
        control: 'text',
      },
      'mdc-layout-grid-column-width-phone': {
        value: '72px',
        description: 'Column width for `desktop` device.',
        control: 'text',
      },
    },
    docs: {
      page: DocsPage,
    },
  },
};
export default meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Basic: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
      <div class="demo-cell"></div>
      <div class="demo-cell"></div>
      <div class="demo-cell"></div>
    </md-layout-grid>
  `,
};
export const CustomSpanSize: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
      <div class="demo-cell" grid-span="6"></div>
      <div class="demo-cell" grid-span="3"></div>
      <div class="demo-cell" grid-span="2"></div>
      <div class="demo-cell" grid-span="1"></div>
      <div class="demo-cell" grid-span="3"></div>
      <div class="demo-cell" grid-span="1"></div>
      <div class="demo-cell" grid-span="8"></div>
    </md-layout-grid>
  `,
  parameters: {
    docs: {
      description: {
        story:
            'The `grid-span` attribute can be used to specify the number of columns a cell should span.',
      },
    },
  },
};
export const Nested: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
      <md-layout-grid-inner class="demo-cell demo-grid" style="min-width: 0">
        <div class="demo-cell"></div>
        <div class="demo-cell"></div>
      </md-layout-grid-inner>
      <div class="demo-cell"></div>
      <div class="demo-cell"></div>
    </md-layout-grid>
  `,
  parameters: {
    docs: {
      description: {
        story: dedent`
                When your contents need extra structure that cannot be supported by single layout grid, you can nest layout grid within each other. To nest layout grid, add a new \`md-layout-grid\` with attribute \`inner\` to wrap around nested content.
                The nested layout grid behaves exactly like when they are not nested, e.g, they have 12 columns on desktop, 8 columns on tablet and 4 columns on phone. They also use the **same gutter size** as their parents, but margins are not re-introduced since they are living within another cell.
                However, the Material Design guidelines do not recommend having a deeply nested grid as it might mean an over complicated UX.
            `,
      },
    },
  },
};
export const GridAlignment: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid
        class="demo-grid demo-grid--alignment"
        ?fixedColumnWidth="${fixedColumnWidth}"
        align="${align}"
    >
      <div class="demo-cell"></div>
      <div class="demo-cell"></div>
      <div class="demo-cell"></div>
    </md-layout-grid>
  `,
  args: {
    align: 'left',
  },
  parameters: {
    docs: {
      description: {
        story:
            'Align the grid to left or right (in this example left). This requires a max-width on the top-level grid element.',
      },
    },
  },
};
export const GridCellsAlignment: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid
        class="demo-grid demo-grid--cell-alignment"
        ?fixedColumnWidth="${fixedColumnWidth}"
        align="${align}"
    >
      <div class="demo-cell demo-cell--alignment" grid-align="top"></div>
      <div class="demo-cell demo-cell--alignment" grid-align="middle"></div>
      <div class="demo-cell demo-cell--alignment" grid-align="bottom"></div>
    </md-layout-grid>
  `,
  parameters: {
    docs: {
      description: {
        story:
            'Align the cells grid to top, middle or bottom. This requires a max-width on the top-level grid element.',
      },
    },
  },
};
export const GridCellsOrder: LayoutGridStory = {
  render: ({fixedColumnWidth, align}) => html`
    <md-layout-grid class="demo-grid" ?fixedColumnWidth="${fixedColumnWidth}" align="${align}">
      <div class="demo-cell" grid-order="3">first</div>
      <div class="demo-cell" grid-order="1">second</div>
      <div class="demo-cell" grid-order="2">third</div>
    </md-layout-grid>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Order the cells in the grid',
      },
    },
  },
};
