import '../data-table.js';
import '../data-table-column.js';
import '../data-table-row.js';
import '../data-table-cell.js';
import {Meta, StoryObj} from '@storybook/web-components';
import type {DataTable} from '../lib/data-table.js';
import {html} from 'lit';
import './styles.scss';
import DocsPage from './docs.mdx';

type DataTableStory = StoryObj<Partial<DataTable>>;

const meta: Meta = {
  title: 'Data Table',
  component: 'md-data-table',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    density: {
      control: 'select',
      options: ['', 'tight', 'comfortable', 'dense', 'compact'],
    },
  },
  args: {
    paginated: false,
    inProgress: false,
    pageSizes: '[10, 25, 100]',
    pageSizesLabel: 'Rows per page:',
    firstRowOfPage: 1,
    paginationTotalLabel: ':firstRow-:lastRow of :totalRows',
  },
  parameters: {
    cssprops: {
      'mdc-data-table-width': {
        value: 'auto',
        description: 'Width of the table',
        control: 'text',
      },
      'mdc-data-table-height': {
        value: 'auto',
        description: 'Height of the table',
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
export const Standard: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Desserts"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column>Dessert</md-data-table-column>
      <md-data-table-column>Calories</md-data-table-column>
      <md-data-table-column>Fat</md-data-table-column>
      <md-data-table-column>Carbs</md-data-table-column>
      <md-data-table-column>Protein (g)</md-data-table-column>
      <md-data-table-row>
        <md-data-table-cell>Frozen yogurt</md-data-table-cell>
        <md-data-table-cell type="number">159</md-data-table-cell>
        <md-data-table-cell type="number">6.0</md-data-table-cell>
        <md-data-table-cell type="number">24</md-data-table-cell>
        <md-data-table-cell type="number">4.0</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Ice cream sandwich</md-data-table-cell>
        <md-data-table-cell type="number">237</md-data-table-cell>
        <md-data-table-cell type="number">9.0</md-data-table-cell>
        <md-data-table-cell type="number">37</md-data-table-cell>
        <md-data-table-cell type="number">4.3</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Eclair</md-data-table-cell>
        <md-data-table-cell type="number">262</md-data-table-cell>
        <md-data-table-cell type="number">16.0</md-data-table-cell>
        <md-data-table-cell type="number">24</md-data-table-cell>
        <md-data-table-cell type="number">6.0</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
};
export const RowSelection: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Dessert calories"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column type="checkbox"></md-data-table-column>
      <md-data-table-column>Signal name</md-data-table-column>
      <md-data-table-column>Status</md-data-table-column>
      <md-data-table-column>Severity</md-data-table-column>
      <md-data-table-column>Stage</md-data-table-column>
      <md-data-table-column>Time</md-data-table-column>
      <md-data-table-column>Roles</md-data-table-column>

      <md-data-table-row>
        <md-data-table-cell type="checkbox"></md-data-table-cell>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell type="checkbox"></md-data-table-cell>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Offline</md-data-table-cell>
        <md-data-table-cell>Huge</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell type="checkbox"></md-data-table-cell>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Brie Larson</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell type="checkbox"></md-data-table-cell>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Minor</md-data-table-cell>
        <md-data-table-cell>Not triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Jeremy Lake</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell type="checkbox"></md-data-table-cell>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Negligible</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Angelina Cheng</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Data table with row selection. A checkbox cell must be added to all the rows and to the header row.',
      },
    },
  },
};
export const Paginated: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Dessert calories"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column>Signal name</md-data-table-column>
      <md-data-table-column>Status</md-data-table-column>
      <md-data-table-column>Severity</md-data-table-column>
      <md-data-table-column>Stage</md-data-table-column>
      <md-data-table-column>Time</md-data-table-column>
      <md-data-table-column>Roles</md-data-table-column>

      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Offline</md-data-table-cell>
        <md-data-table-cell>Huge</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Brie Larson</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Minor</md-data-table-cell>
        <md-data-table-cell>Not triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Jeremy Lake</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Negligible</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Angelina Cheng</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
  args: {
    paginated: true,
    pageSizes: '[1, 3, 5]',
  },
  parameters: {
    cssprops: {
      'mdc-data-table-width': {
        value: '50em',
      },
    },
    docs: {
      description: {
        story: 'Paginated data table. Enabled when the `paginated` attribute is set to `true`.',
      },
    },
  },
};
export const InProgress: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Dessert calories"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column>Signal name</md-data-table-column>
      <md-data-table-column>Status</md-data-table-column>
      <md-data-table-column>Severity</md-data-table-column>
      <md-data-table-column>Stage</md-data-table-column>
      <md-data-table-column>Time</md-data-table-column>
      <md-data-table-column>Roles</md-data-table-column>

      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Offline</md-data-table-cell>
        <md-data-table-cell>Huge</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Brie Larson</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Minor</md-data-table-cell>
        <md-data-table-cell>Not triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Jeremy Lake</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Negligible</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Angelina Cheng</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
  args: {
    inProgress: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading data table. Enabled when the `inProgress` attribute is set to `true`.',
      },
    },
  },
};
export const WithFilterTextField: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Dessert calories"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column filterable>Signal name</md-data-table-column>
      <md-data-table-column>Status</md-data-table-column>
      <md-data-table-column>Severity</md-data-table-column>
      <md-data-table-column filterable filterCaseSensitive>Stage</md-data-table-column>
      <md-data-table-column>Time</md-data-table-column>
      <md-data-table-column>Roles</md-data-table-column>

      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Offline</md-data-table-cell>
        <md-data-table-cell>Huge</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Brie Larson</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Minor</md-data-table-cell>
        <md-data-table-cell>Not triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Jeremy Lake</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Negligible</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Angelina Cheng</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Data table with some filter text field. Enabled when the `filterable` attribute is added to a column. Case sensitiveness can be set using the `filterCaseSensitive` attribute.',
      },
    },
  },
};
export const WithSorting: DataTableStory = {
  render: (args) => html`
    <md-data-table
      aria-label="Dessert calories"
      ?paginated="${args.paginated}"
      ?inProgress="${args.inProgress}"
      density="${args.density}"
      pageSizes="${args.pageSizes}"
      pageSizesLabel="${args.pageSizesLabel}"
      firstRowOfPage="${args.firstRowOfPage}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
      paginationTotalLabel="${args.paginationTotalLabel}"
      currentPageSize="${args.currentPageSize}"
      lastRowOfPage="${args.lastRowOfPage}"
    >
      <md-data-table-column sortable sorted>Signal name</md-data-table-column>
      <md-data-table-column>Status</md-data-table-column>
      <md-data-table-column>Severity</md-data-table-column>
      <md-data-table-column sortable>Stage</md-data-table-column>
      <md-data-table-column>Time</md-data-table-column>
      <md-data-table-column>Roles</md-data-table-column>

      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Offline</md-data-table-cell>
        <md-data-table-cell>Huge</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Allison Brie</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Medium</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Brie Larson</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell
          >monarch: prod shared ares-managed-features-provider-heavy</md-data-table-cell
        >
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Minor</md-data-table-cell>
        <md-data-table-cell>Not triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Jeremy Lake</md-data-table-cell>
      </md-data-table-row>
      <md-data-table-row>
        <md-data-table-cell>Arcus watch slowdown</md-data-table-cell>
        <md-data-table-cell>Online</md-data-table-cell>
        <md-data-table-cell>Negligible</md-data-table-cell>
        <md-data-table-cell>Triaged</md-data-table-cell>
        <md-data-table-cell type="numeric">0:33</md-data-table-cell>
        <md-data-table-cell>Angelina Cheng</md-data-table-cell>
      </md-data-table-row>
    </md-data-table>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Data table with some sortable columns. Enabled when the `sortable` attribute is added to a column. You can control the sort direction via the `sortedDescending` attribute.',
      },
    },
  },
};
