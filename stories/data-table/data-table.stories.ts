// @ts-ignore
import '../../packages/data-table/mwc-data-table';
import {Meta, Story} from '@storybook/web-components';
import {DataTable} from '../../packages/data-table';
import {html} from 'lit';
import './styles.scss';
import DocsPage from './docs.mdx';

export default {
    title: 'Data Table',
    component: 'mwc-data-table',
    subcomponents: {
        'DataTableColumn': 'mwc-data-table-column',
        'DataTableRow': 'mwc-data-table-row',
        'DataTableCell': 'mwc-data-table-cell',
        'DataTableFooter': 'mwc-data-table-footer'
    },
    expanded: true,
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        density: {
            control: 'select',
            options: ['', 'tight', 'comfortable', 'dense', 'compact']
        }
    },
    args: {
        paginated: false,
        inProgress: false,
        pageSizes: '[10, 25, 100]',
        pageSizesLabel: 'Rows per page:',
        firstRowOfPage: 1,
        paginationTotalLabel: ':firstRow-:lastRow of :totalRows'
    },
    parameters: {
        cssprops: {
            'mdc-data-table-width': {
                value: 'auto',
                description: 'Width of the table',
                control: 'text'
            },
            'mdc-data-table-height': {
                value: 'auto',
                description: 'Height of the table',
                control: 'text'
            }
        },
        docs: {
            page: DocsPage
        }
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Standard: Story<Partial<DataTable>> = (args) => html`
    <mwc-data-table aria-label="Desserts"
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
                    lastRowOfPage="${args.lastRowOfPage}">
        <mwc-data-table-column>Dessert</mwc-data-table-column>
        <mwc-data-table-column>Calories</mwc-data-table-column>
        <mwc-data-table-column>Fat</mwc-data-table-column>
        <mwc-data-table-column>Carbs</mwc-data-table-column>
        <mwc-data-table-column>Protein (g)</mwc-data-table-column>
        <mwc-data-table-row>
            <mwc-data-table-cell>Frozen yogurt</mwc-data-table-cell>
            <mwc-data-table-cell type="number">159</mwc-data-table-cell>
            <mwc-data-table-cell type="number">6.0</mwc-data-table-cell>
            <mwc-data-table-cell type="number">24</mwc-data-table-cell>
            <mwc-data-table-cell type="number">4.0</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Ice cream sandwich</mwc-data-table-cell>
            <mwc-data-table-cell type="number">237</mwc-data-table-cell>
            <mwc-data-table-cell type="number">9.0</mwc-data-table-cell>
            <mwc-data-table-cell type="number">37</mwc-data-table-cell>
            <mwc-data-table-cell type="number">4.3</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Eclair</mwc-data-table-cell>
            <mwc-data-table-cell type="number">262</mwc-data-table-cell>
            <mwc-data-table-cell type="number">16.0</mwc-data-table-cell>
            <mwc-data-table-cell type="number">24</mwc-data-table-cell>
            <mwc-data-table-cell type="number">6.0</mwc-data-table-cell>
        </mwc-data-table-row>
    </mwc-data-table>
`;

export const RowSelection: Story<Partial<DataTable>> = (args) => html`
    <mwc-data-table aria-label="Dessert calories"
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
                    lastRowOfPage="${args.lastRowOfPage}">
        <mwc-data-table-column type="checkbox"></mwc-data-table-column>
        <mwc-data-table-column>Signal name</mwc-data-table-column>
        <mwc-data-table-column>Status</mwc-data-table-column>
        <mwc-data-table-column>Severity</mwc-data-table-column>
        <mwc-data-table-column>Stage</mwc-data-table-column>
        <mwc-data-table-column>Time</mwc-data-table-column>
        <mwc-data-table-column>Roles</mwc-data-table-column>
        
        <mwc-data-table-row>
            <mwc-data-table-cell type="checkbox"></mwc-data-table-cell>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell type="checkbox"></mwc-data-table-cell>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Offline</mwc-data-table-cell>
            <mwc-data-table-cell>Huge</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell type="checkbox"></mwc-data-table-cell>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Brie Larson</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell type="checkbox"></mwc-data-table-cell>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Minor</mwc-data-table-cell>
            <mwc-data-table-cell>Not triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Jeremy Lake</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell type="checkbox"></mwc-data-table-cell>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Negligible</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Angelina Cheng</mwc-data-table-cell>
        </mwc-data-table-row>
    </mwc-data-table>
`;
RowSelection.parameters = {
    docs: {
        description: {
            story: 'Data table with row selection. A checkbox cell must be added to all the rows and to the header row.'
        }
    }
};

export const Paginated: Story<Partial<DataTable>> = (args) => html`
    <mwc-data-table aria-label="Dessert calories"
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
                    lastRowOfPage="${args.lastRowOfPage}">
        <mwc-data-table-column>Signal name</mwc-data-table-column>
        <mwc-data-table-column>Status</mwc-data-table-column>
        <mwc-data-table-column>Severity</mwc-data-table-column>
        <mwc-data-table-column>Stage</mwc-data-table-column>
        <mwc-data-table-column>Time</mwc-data-table-column>
        <mwc-data-table-column>Roles</mwc-data-table-column>
        
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Offline</mwc-data-table-cell>
            <mwc-data-table-cell>Huge</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Brie Larson</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Minor</mwc-data-table-cell>
            <mwc-data-table-cell>Not triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Jeremy Lake</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Negligible</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Angelina Cheng</mwc-data-table-cell>
        </mwc-data-table-row>
    </mwc-data-table>
`;
Paginated.args = {
    paginated: true,
    pageSizes: '[1, 3, 5]',
};
Paginated.parameters = {
    cssprops: {
        'mdc-data-table-width': {
            value: '50em'
        }
    },
    docs: {
        description: {
            story: 'Paginated data table. Enabled when the `paginated` attribute is set to `true`.'
        }
    }
};

export const InProgress: Story<Partial<DataTable>> = (args) => html`
    <mwc-data-table aria-label="Dessert calories"
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
                    lastRowOfPage="${args.lastRowOfPage}">
        <mwc-data-table-column>Signal name</mwc-data-table-column>
        <mwc-data-table-column>Status</mwc-data-table-column>
        <mwc-data-table-column>Severity</mwc-data-table-column>
        <mwc-data-table-column>Stage</mwc-data-table-column>
        <mwc-data-table-column>Time</mwc-data-table-column>
        <mwc-data-table-column>Roles</mwc-data-table-column>
        
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Offline</mwc-data-table-cell>
            <mwc-data-table-cell>Huge</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Brie Larson</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Minor</mwc-data-table-cell>
            <mwc-data-table-cell>Not triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Jeremy Lake</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Negligible</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Angelina Cheng</mwc-data-table-cell>
        </mwc-data-table-row>
    </mwc-data-table>
`;
InProgress.args = {
    inProgress: true
};
InProgress.parameters = {
    docs: {
        description: {
            story: 'Loading data table. Enabled when the `inProgress` attribute is set to `true`.'
        }
    }
};

export const WithFilterTextField: Story<Partial<DataTable>> = (args) => html`
    <mwc-data-table aria-label="Dessert calories"
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
                    lastRowOfPage="${args.lastRowOfPage}">
        <mwc-data-table-column filterable>Signal name</mwc-data-table-column>
        <mwc-data-table-column>Status</mwc-data-table-column>
        <mwc-data-table-column>Severity</mwc-data-table-column>
        <mwc-data-table-column filterable filterCaseSensitive>Stage</mwc-data-table-column>
        <mwc-data-table-column>Time</mwc-data-table-column>
        <mwc-data-table-column>Roles</mwc-data-table-column>
        
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Offline</mwc-data-table-cell>
            <mwc-data-table-cell>Huge</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Allison Brie</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Medium</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Brie Larson</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Minor</mwc-data-table-cell>
            <mwc-data-table-cell>Not triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Jeremy Lake</mwc-data-table-cell>
        </mwc-data-table-row>
        <mwc-data-table-row>
            <mwc-data-table-cell>Arcus watch slowdown</mwc-data-table-cell>
            <mwc-data-table-cell>Online</mwc-data-table-cell>
            <mwc-data-table-cell>Negligible</mwc-data-table-cell>
            <mwc-data-table-cell>Triaged</mwc-data-table-cell>
            <mwc-data-table-cell type="numeric">0:33</mwc-data-table-cell>
            <mwc-data-table-cell>Angelina Cheng</mwc-data-table-cell>
        </mwc-data-table-row>
    </mwc-data-table>
`;
WithFilterTextField.parameters = {
    docs: {
        description: {
            story: 'Data table with some filter text field. Enabled when the `filterable` attribute is added to a column. Case sensitiveness can be set using the `filterCaseSensitive` attribute.'
        }
    }
};
