// @ts-ignore
import '../../packages/data-table/mwa-data-table';
import {Meta, Story} from '@storybook/web-components';
import {DataTable} from '../../packages/data-table';
import {html} from 'lit';
import './styles.scss';
import DocsPage from './docs.mdx';

export default {
    title: 'Data Table',
    component: 'mwa-data-table',
    subcomponents: {
        'DataTableColumn': 'mwa-data-table-column',
        'DataTableRow': 'mwa-data-table-row',
        'DataTableCell': 'mwa-data-table-cell',
        'DataTableFooter': 'mwa-data-table-footer'
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
    <mwa-data-table aria-label="Desserts"
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
        <mwa-data-table-column>Dessert</mwa-data-table-column>
        <mwa-data-table-column>Calories</mwa-data-table-column>
        <mwa-data-table-column>Fat</mwa-data-table-column>
        <mwa-data-table-column>Carbs</mwa-data-table-column>
        <mwa-data-table-column>Protein (g)</mwa-data-table-column>
        <mwa-data-table-row>
            <mwa-data-table-cell>Frozen yogurt</mwa-data-table-cell>
            <mwa-data-table-cell type="number">159</mwa-data-table-cell>
            <mwa-data-table-cell type="number">6.0</mwa-data-table-cell>
            <mwa-data-table-cell type="number">24</mwa-data-table-cell>
            <mwa-data-table-cell type="number">4.0</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Ice cream sandwich</mwa-data-table-cell>
            <mwa-data-table-cell type="number">237</mwa-data-table-cell>
            <mwa-data-table-cell type="number">9.0</mwa-data-table-cell>
            <mwa-data-table-cell type="number">37</mwa-data-table-cell>
            <mwa-data-table-cell type="number">4.3</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Eclair</mwa-data-table-cell>
            <mwa-data-table-cell type="number">262</mwa-data-table-cell>
            <mwa-data-table-cell type="number">16.0</mwa-data-table-cell>
            <mwa-data-table-cell type="number">24</mwa-data-table-cell>
            <mwa-data-table-cell type="number">6.0</mwa-data-table-cell>
        </mwa-data-table-row>
    </mwa-data-table>
`;

export const RowSelection: Story<Partial<DataTable>> = (args) => html`
    <mwa-data-table aria-label="Dessert calories"
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
        <mwa-data-table-column type="checkbox"></mwa-data-table-column>
        <mwa-data-table-column>Signal name</mwa-data-table-column>
        <mwa-data-table-column>Status</mwa-data-table-column>
        <mwa-data-table-column>Severity</mwa-data-table-column>
        <mwa-data-table-column>Stage</mwa-data-table-column>
        <mwa-data-table-column>Time</mwa-data-table-column>
        <mwa-data-table-column>Roles</mwa-data-table-column>
        
        <mwa-data-table-row>
            <mwa-data-table-cell type="checkbox"></mwa-data-table-cell>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell type="checkbox"></mwa-data-table-cell>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Offline</mwa-data-table-cell>
            <mwa-data-table-cell>Huge</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell type="checkbox"></mwa-data-table-cell>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Brie Larson</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell type="checkbox"></mwa-data-table-cell>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Minor</mwa-data-table-cell>
            <mwa-data-table-cell>Not triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Jeremy Lake</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell type="checkbox"></mwa-data-table-cell>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Negligible</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Angelina Cheng</mwa-data-table-cell>
        </mwa-data-table-row>
    </mwa-data-table>
`;
RowSelection.parameters = {
    docs: {
        description: {
            story: 'Data table with row selection. A checkbox cell must be added to all the rows and to the header row.'
        }
    }
};

export const Paginated: Story<Partial<DataTable>> = (args) => html`
    <mwa-data-table aria-label="Dessert calories"
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
        <mwa-data-table-column>Signal name</mwa-data-table-column>
        <mwa-data-table-column>Status</mwa-data-table-column>
        <mwa-data-table-column>Severity</mwa-data-table-column>
        <mwa-data-table-column>Stage</mwa-data-table-column>
        <mwa-data-table-column>Time</mwa-data-table-column>
        <mwa-data-table-column>Roles</mwa-data-table-column>
        
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Offline</mwa-data-table-cell>
            <mwa-data-table-cell>Huge</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Brie Larson</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Minor</mwa-data-table-cell>
            <mwa-data-table-cell>Not triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Jeremy Lake</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Negligible</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Angelina Cheng</mwa-data-table-cell>
        </mwa-data-table-row>
    </mwa-data-table>
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
    <mwa-data-table aria-label="Dessert calories"
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
        <mwa-data-table-column>Signal name</mwa-data-table-column>
        <mwa-data-table-column>Status</mwa-data-table-column>
        <mwa-data-table-column>Severity</mwa-data-table-column>
        <mwa-data-table-column>Stage</mwa-data-table-column>
        <mwa-data-table-column>Time</mwa-data-table-column>
        <mwa-data-table-column>Roles</mwa-data-table-column>
        
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Offline</mwa-data-table-cell>
            <mwa-data-table-cell>Huge</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Brie Larson</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Minor</mwa-data-table-cell>
            <mwa-data-table-cell>Not triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Jeremy Lake</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Negligible</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Angelina Cheng</mwa-data-table-cell>
        </mwa-data-table-row>
    </mwa-data-table>
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
    <mwa-data-table aria-label="Dessert calories"
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
        <mwa-data-table-column filterable>Signal name</mwa-data-table-column>
        <mwa-data-table-column>Status</mwa-data-table-column>
        <mwa-data-table-column>Severity</mwa-data-table-column>
        <mwa-data-table-column filterable filterCaseSensitive>Stage</mwa-data-table-column>
        <mwa-data-table-column>Time</mwa-data-table-column>
        <mwa-data-table-column>Roles</mwa-data-table-column>
        
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Offline</mwa-data-table-cell>
            <mwa-data-table-cell>Huge</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Allison Brie</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Medium</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Brie Larson</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>monarch: prod shared ares-managed-features-provider-heavy</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Minor</mwa-data-table-cell>
            <mwa-data-table-cell>Not triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Jeremy Lake</mwa-data-table-cell>
        </mwa-data-table-row>
        <mwa-data-table-row>
            <mwa-data-table-cell>Arcus watch slowdown</mwa-data-table-cell>
            <mwa-data-table-cell>Online</mwa-data-table-cell>
            <mwa-data-table-cell>Negligible</mwa-data-table-cell>
            <mwa-data-table-cell>Triaged</mwa-data-table-cell>
            <mwa-data-table-cell type="numeric">0:33</mwa-data-table-cell>
            <mwa-data-table-cell>Angelina Cheng</mwa-data-table-cell>
        </mwa-data-table-row>
    </mwa-data-table>
`;
WithFilterTextField.parameters = {
    docs: {
        description: {
            story: 'Data table with some filter text field. Enabled when the `filterable` attribute is added to a column. Case sensitiveness can be set using the `filterCaseSensitive` attribute.'
        }
    }
};
