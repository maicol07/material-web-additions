import '@material/web/progress/linear-progress.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '../data-table-footer.js';

import {html, PropertyValueMap} from 'lit';
import {property, query, queryAssignedElements} from 'lit/decorators.js';
import {DataTableColumn, FilterTextFieldInputEventDetail, SortButtonClickedEventDetail} from './data-table-column.js';
import {
  attributes,
  MDCDataTable,
  MDCDataTableAdapter,
  MDCDataTableFoundation,
  MDCDataTableRowSelectionChangedEventDetail,
  ProgressIndicatorStyles,
  RowClickEventData,
  SortActionEventDetail
} from '@material/data-table';
import {cssClasses, messages, SortValue} from '@material/data-table/constants.js';
import {IconButton} from '@material/web/iconbutton/internal/icon-button.js';
import {LinearProgress} from '@material/web/progress/internal/linear-progress.js';
import {DataTableRow} from './data-table-row.js';
import {BaseElement} from '@material/mwc-base';
import {Select} from '@material/web/select/internal/select.js';

export interface RowSelectionChangedDetail {
  row: DataTableRow,
  rowIndex: number,
  selected: boolean
}

export interface FilteredDetail {
  column: DataTableColumn,
  text: string,
  caseSensitive: boolean
  columnIndex: number
}

export interface SortedDetail {
  column: DataTableColumn,
  isDescending: boolean
}

export interface PageSizeChangeDetail {
  pageSize: number
}

export type PaginationAction = 'current' | 'first' | 'previous' | 'next' | 'last';

export interface PageChangeDetail {
  action: PaginationAction,
}

export interface PaginateDetail {
  firstRow: number,
  lastRow: number,
  pageSize: number,
  action: PaginationAction
}

/**
 * @fires row-selection-changed - Event emitted when row checkbox is checked or unchecked. Detail contains the `row` element, `rowIndex` and `selected`.
 * @fires selected-all - Event emitted when header row checkbox is checked.
 * @fires unselected-all - Event emitted when header row checkbox is unchecked.
 * @fires row-click - Event emitted when a row has been checked or unchecked. Detail contains the `row` element, `rowIndex` and `selected`.
 * @fires filtered - Event emitted when the data table has been filtered. Detail contains the `column` element, `text`, `caseSensitive` and `columnIndex`.
 * @fires sorted - Event emitted when the data table has been sorted. Detail contains the `column` element and `isDescending`.
 * @fires page-size-change - Event emitted when the page size has been changed. Detail contains the `pageSize`.
 * @fires page-changed - Event emitted when the page has been changed. Detail contains the `action`.
 * @fires paginate - Event emitted when the data table has been paginated. Detail contains the `firstRow`, `lastRow`, `pageSize` and `action`.
 */
export class DataTable extends BaseElement {
  /**
   * Enable/disable pagination.
   */
  @property({type: Boolean, reflect: true}) paginated = false;
  /**
   * JSON array with the page sizes to be used in the pagination and shown as page size select options.
   */
  @property({type: String, reflect: true, attribute: 'page-sizes'}) pageSizes = '[10, 25, 100]';
  /**
   * Label to show before the page size select.
   */
  @property({type: String, reflect: true, attribute: 'page-sizes-label'}) pageSizesLabel = 'Rows per page:';
  /**
   * Index of the first row to be shown on the current page.
   */
  @property({type: Number, reflect: true, attribute: 'current-first-row'}) currentFirstRow = 1;
  /** @internal */
  protected pageSizesArray: number[] = JSON.parse(this.pageSizes);
  /**
   * Size of the current page.
   */
  @property({type: Number, reflect: true, attribute: 'current-page-size'}) currentPageSize = this.pageSizesArray[0];
  /**
   * Index of the last row to be shown on the current page.
   */
  @property({type: Number, reflect: true, attribute: 'current-last-row'}) currentLastRow = this.currentPageSize;
  /**
   * Total number of rows in the data table to show in the pagination label and
   */
  @property({type: Number, attribute: 'total-rows'}) totalRows: number = 0;
  /**
   * Label pattern to show after the page size select that indicates the current rows shown in the page.
   * It should contain the following parameters: `:firstRow`, `:lastRow`, `:totalRows`
   */
  @property({type: String}) paginationTotalLabel = ':firstRow-:lastRow of :totalRows';
  /**
   * Whether the data table is using a custom pagination function. If true, the automatic pagination is disabled and
   * the `current-first-row`, `current-last-row` and `current-page-size` attributes are not updated automatically.
   * You'll have to handle the pagination yourself by listening to the `paginate` event and updating the
   * `current-first-row`, `current-last-row` and `current-page-size` attributes accordingly.
   */
  @property({type: Boolean, attribute: 'custom-pagination'}) customPagination = false;
  /**
   * Whether the loading indicator is active.
   */
  @property({type: Boolean, reflect: true, attribute: 'in-progress'}) inProgress = false;
  /**
   * Overall height of the table. Available in three different measures.
   */
  @property({type: String}) density: '' | 'tight' | 'comfortable' | 'dense' | 'compact' = '';
  /** @internal */
  @queryAssignedElements({slot: 'header-cell', selector: 'md-data-table-column'}) protected columns!: DataTableColumn[];
  /** @internal */
  @queryAssignedElements({slot: 'row', selector: 'md-data-table-row'}) protected rows!: DataTableRow[];
  /** @internal */
  @query('.mdc-data-table') protected tableElement!: HTMLTableElement;
  /** @internal */
  @query('.mdc-data-table__table-container') protected tableContainerElement!: HTMLTableElement;
  /** @internal */
  @query('.mdc-data-table__header-row') protected headerRowElement!: HTMLTableSectionElement;
  /** @internal */
  @query('.mdc-data-table__progress-indicator') protected progressIndicator!: LinearProgress;

  /** @internal */
  protected mdcDataTable?: MDCDataTable;
  /** @internal */
  protected mdcRoot: HTMLDivElement = this.tableElement;
  /** @internal */
    // @ts-expect-error (TypeScript bug)
  protected readonly mdcFoundationClass = MDCDataTableFoundation;
  /** @internal */
    // @ts-expect-error (TypeScript bug)
  protected mdcFoundation!: MDCDataTableFoundation;
  protected columnFilters: Map<DataTableColumn, string> = new Map();

  /** @internal */
  protected get headerCheckboxRow() {
    return this.columns.filter((column) => column.checkbox !== undefined)[0];
  }

  /** @internal */
  protected get headerCheckbox() {
    return this.headerCheckboxRow?.checkbox;
  }

  protected override render() {
    return html`
        <div class="mdc-data-table">
            <div class="mdc-data-table__table-container">
                <div class="mdc-data-table__table" aria-label="${this.ariaLabel}" role="table">
                    <div class="mdc-data-table__head" role="rowgroup">
                        <div class="mdc-data-table__header-row" role="row">
                            <slot name="header-cell" @slotchange=${this.onHeaderCellSlotChange}></slot>
                        </div>
                    </div>
                    <div class="mdc-data-table__content" role="rowgroup">
                        <slot name="row" @slotchange=${() => this.requestUpdate()}></slot>
                    </div>
                </div>
            </div>

            ${this.renderPagination()}

            <slot name="footer"></slot>

            <div class="mdc-data-table__progress-indicator">
                <div class="mdc-data-table__scrim"></div>
                <md-linear-progress indeterminate class="mdc-data-table__linear-progress" role="progressbar"
                                    aria-label="Data is being loaded..."></md-linear-progress>
            </div>
        </div>
    `;
  }

  protected onHeaderCellSlotChange() {
    this.requestUpdate();
    const sortColumn = this.columns.find((column) => column.sortable && column.sorted);
    if (sortColumn) {
      sortColumn.onSortButtonClicked(new CustomEvent<{
        selected: boolean
      }>('icon-button-toggle-change', {detail: {selected: !sortColumn.sortedDescending}}));
    }
  }

  /** @internal */
  protected rowCallback = (e: Event) => this.mdcFoundation.handleRowCheckboxChange(e);

  /** @internal */
  protected headerRowCallback = () => this.mdcFoundation.handleHeaderRowCheckboxChange();

  /** @internal */
  protected filterColumnCallback = (e: Event) => {
    const event = e as CustomEvent<FilterTextFieldInputEventDetail>;

    // Don't filter if the column is using custom filtering
    if (event.detail.customFiltering) {
      return;
    }

    const {text, column} = event.detail;

    if (text === '') {
      this.columnFilters.delete(column);
    } else {
      this.columnFilters.set(column, text);
    }

    for (const row of this.rows) {
      row.hidden = true;
    }

    let rowsToShow = this.rows;

    for (let [column, filterText] of this.columnFilters) {
      rowsToShow = this.rows.filter((row) => {
        const index = this.columns.indexOf(column);
        let cellText = row.cells[index].textContent ?? '';

        if (!event.detail.caseSensitive) {
          cellText = cellText.toLowerCase();
          filterText = filterText.toLowerCase();
        }

        return cellText.search(filterText) !== -1;
      });
    }

    this.showRows(rowsToShow);

    this.dispatchEvent(new CustomEvent<FilteredDetail>('filtered', {
      detail: {
        column: event.detail.column,
        text,
        caseSensitive: event.detail.caseSensitive,
        columnIndex: this.columns.indexOf(column)
      }
    }));
  };
  sortColumnCallback = (e: Event) => {
    const event = e as CustomEvent<SortButtonClickedEventDetail>;
    const {column, isDescending} = event.detail;

    // Don't sort if the column is using custom sorting
    if (!event.detail.customSorting) {
      this.inProgress = true;

      for (const col of this.columns.filter((col) => col !== column && col.sortable)) {
        col.sorted = false;
        col.sortedDescending = false;
      }

      const cells = this.rows.map((row) => row.cells[this.columns.indexOf(column)]);

      cells.sort((a: HTMLElement, b: HTMLElement) => {
        let aValue: string | number = a.textContent as string;
        let bValue: string | number = b.textContent as string;

        if (column.type === 'numeric' && (typeof aValue === 'string' || typeof bValue === 'string')) {
          aValue = Number.parseFloat(aValue);
          bValue = Number.parseFloat(bValue);
        }

        if (!isDescending) {
          const temporary = aValue;
          aValue = bValue;
          bValue = temporary;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }

        return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
      });

      // this.rows = cells.map((cell) => cell.parentElement as DataTableRow);
      for (const cell of cells) {
        const row = cell.parentElement as DataTableRow;
        row.parentElement?.append(row);
      }

      this.inProgress = false;
      column.sorted = true;
    }
    column.withSortButton = true;

    this.dispatchEvent(new CustomEvent<SortedDetail>('sorted', {
      detail: {
        column: event.detail.column,
        isDescending,
      }
    }));
  };

  protected renderPagination() {
    if (this.paginated) {
      const totalRows = this.totalRows ?? this.rows.length;
      const currentFirstRow = this.currentFirstRow < 1 ? 1 : this.currentFirstRow;
      const currentLastRow = this.currentLastRow > totalRows ? totalRows : this.currentLastRow;
      return html`
          <md-data-table-footer>
              <div class="mdc-data-table__pagination-trailing">
                  <div class="mdc-data-table__pagination-rows-per-page">
                      <div class="mdc-data-table__pagination-rows-per-page-label">
                          ${this.pageSizesLabel}
                      </div>

                      <md-outlined-select
                              type="number"
                              class="mdc-data-table__pagination-rows-per-page-select"
                              value="${this.currentPageSize}"
                              @input=${this.onPageSizeSelected}>
                          ${this.pageSizesArray.map((size) => html`
                              <md-select-option value="${size}" headline="${size}">${size}</md-select-option>
                          `)}
                      </md-outlined-select>
                  </div>

                  <div class="mdc-data-table__pagination-navigation">
                      <div class="mdc-data-table__pagination-total">
                          ${this.renderTemplate(this.paginationTotalLabel, {
                              'firstRow': currentFirstRow,
                              'lastRow': currentLastRow,
                              totalRows,
                          })}
                      </div>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="first"
                                             ?disabled=${currentFirstRow <= 1}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-first-button-icon">
                              <md-icon slot="icon">first_page</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="previous"
                                             ?disabled=${currentFirstRow <= 1}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-previous-button-icon">
                              <md-icon>chevron_left</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="next"
                                             ?disabled=${currentLastRow >= totalRows}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-next-button-icon">
                              <md-icon>chevron_right</md-icon>
                          </slot>
                      </md-filled-icon-button>
                      <md-filled-icon-button class="mdc-data-table__pagination-button"
                                             data-page="last"
                                             ?disabled=${currentLastRow >= totalRows}
                                             @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-last-button-icon">
                              <md-icon>last_page</md-icon>
                          </slot>
                      </md-filled-icon-button>
                  </div>
              </div>
              </div>
      `;
    }

    return '';
  }

  protected onPageSizeSelected(e: InputEvent) {
    // const select = e.target as Autocomplete;
    this.currentPageSize = Number.parseInt((e.target as Select).value);
    this.dispatchEvent(new CustomEvent<PageSizeChangeDetail>('page-size-change', {
      detail: {
        pageSize: this.currentPageSize,
      }
    }));
    this.paginate('first');
  }

  protected onPaginationButtonClicked(event: Event) {
    let button = event.target as HTMLElement;
    if (!(button instanceof IconButton)) {
      button = button.closest('.mdc-data-table__pagination-button') as IconButton;
    }
    const action = button.dataset['page'] as PaginationAction;

    this.dispatchEvent(new CustomEvent<PageChangeDetail>('page-changed', {
      detail: {
        action
      }
    }));

    this.paginate(action);
  }

  paginate(action: PaginationAction = 'current') {
    this.pageSizesArray = JSON.parse(this.pageSizes);
    if (!this.pageSizesArray.includes(this.currentPageSize)) {
      this.currentPageSize = this.pageSizesArray[0];
    }

    this.dispatchEvent(new CustomEvent<PaginateDetail>('paginate', {
      detail: {
        pageSize: this.currentPageSize,
        firstRow: this.currentFirstRow,
        lastRow: this.currentLastRow,
        action
      }
    }));

    if (this.paginated && !this.customPagination) {
      this.hideRows();

      switch (action) {
        case 'first':
          this.currentFirstRow = 1;
          this.currentLastRow = this.currentPageSize;
          break;
        case 'previous':
          this.currentFirstRow -= this.currentPageSize;
          this.currentLastRow -= this.currentPageSize;
          if (this.currentFirstRow < 1) {
            this.currentFirstRow = 1;
            this.currentLastRow = this.currentPageSize;
          }
          break;
        case 'next':
          this.currentFirstRow += this.currentPageSize;
          this.currentLastRow += this.currentPageSize;
          break;
        case 'last':
          this.currentFirstRow = this.rows.length - this.currentPageSize + 1;
          this.currentLastRow = this.rows.length;
          break;
      }

      const rowsToShow = this.rows.slice(this.currentFirstRow - 1, this.currentLastRow);
      this.showRows(rowsToShow);
    }
  }

  protected override firstUpdated() {
    super.firstUpdated();
    this.paginate('first');
  }

  protected override updated(_changedProperties: PropertyValueMap<any>) {
    super.updated(_changedProperties);

    for (const row of this.rows) {
      row.removeEventListener('selected', this.rowCallback);
      row.addEventListener('selected', this.rowCallback);
      row.setAttribute('density', this.density);
    }

    for (const column of this.columns) {
      column.removeEventListener('filter', this.filterColumnCallback);
      column.addEventListener('filter', this.filterColumnCallback);
      column.removeEventListener('sort', this.sortColumnCallback);
      column.addEventListener('sort', this.sortColumnCallback);
      column.setAttribute('density', this.density);
    }

    this.headerCheckboxRow?.removeEventListener('checked', this.headerRowCallback);
    this.headerCheckboxRow?.addEventListener('checked', this.headerRowCallback);

    this.paginate();

    if (this.inProgress) {
      this.mdcFoundation?.showProgress();
    } else {
      this.mdcFoundation?.hideProgress();
    }

    this.mdcFoundation?.layout();
  }

  protected createAdapter(): MDCDataTableAdapter {
    type ClassName = typeof cssClasses[keyof typeof cssClasses];
    return {
      addClass: (className: ClassName) => {
        if (className === cssClasses.IN_PROGRESS) {
          this.tableElement.classList.add(cssClasses.IN_PROGRESS);
        }
      },
      removeClass: (className: ClassName) => {
        if (className === cssClasses.IN_PROGRESS) {
          this.tableElement.classList.remove(cssClasses.IN_PROGRESS);
        }
      },
      addClassAtRowIndex: (rowIndex: number, className: ClassName) => {
        if (className === cssClasses.ROW_SELECTED) {
          this.rows[rowIndex].selected = true;
        }
      },
      getRowCount: () => this.totalRows ?? this.rows.length,
      getRowElements: () => this.rows,
      getRowIdAtIndex: (rowIndex: number) => this.rows?.[rowIndex].id ?? null,
      getRowIndexByChildElement: (el: Element) => this.rows.findIndex((row) => row.contains(el)),
      getSelectedRowCount: () => this.rows.filter((row) => row.selected).length,
      isCheckboxAtRowIndexChecked: (rowIndex: number) => this.rows[rowIndex].selected,
      isHeaderRowCheckboxChecked: () => this.headerCheckbox?.checked ?? false,
      isRowsSelectable: () => this.headerCheckbox !== undefined ||
        this.rows.filter((row) => row.checkboxCell !== undefined).length > 0,
      notifyRowSelectionChanged: (data: MDCDataTableRowSelectionChangedEventDetail) => {
        this.dispatchEvent(new CustomEvent<RowSelectionChangedDetail>(
          'row-selection-changed',
          {
            detail: {
              row: this.rows[data.rowIndex],
              rowIndex: data.rowIndex,
              selected: data.selected,
            }
          }
        ));
      },
      notifySelectedAll: () => {
        this.dispatchEvent(new CustomEvent('selected-all'));
      },
      notifyUnselectedAll: () => {
        this.dispatchEvent(new CustomEvent('unselected-all'));
      },
      notifyRowClick: (detail: RowClickEventData) => {
        this.dispatchEvent(new CustomEvent('row-click', {detail}));
      },
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (rowIndex: number, className: ClassName) => {
        if (className === cssClasses.ROW_SELECTED) {
          this.rows[rowIndex].selected = false;
        }
      },
      setAttributeAtRowIndex: (rowIndex: number, attr: string, value: string) => {
        const row = this.rows[rowIndex];
        if (row) {
          row.setAttribute(attr, value);
          if (attr === attributes.ARIA_SELECTED) {
            row.selected = value === 'true';
          }
        }
      },
      setHeaderRowCheckboxChecked: (checked: boolean) => {
        if (this.headerCheckbox) {
          this.headerCheckbox.checked = checked;
        }
      },
      setHeaderRowCheckboxIndeterminate: (indeterminate: boolean) => {
        if (this.headerCheckbox) {
          this.headerCheckbox.indeterminate = indeterminate;
        }
      },
      setRowCheckboxCheckedAtIndex: (rowIndex: number, checked: boolean) => {
        const row = this.rows[rowIndex];
        if (row) {
          row.selected = checked;
        }
      },
      getHeaderCellCount: () => this.columns.length,
      getHeaderCellElements: () => this.columns,
      getAttributeByHeaderCellIndex: (columnIndex: number, attribute: string) => this.columns[columnIndex].getAttribute(attribute),
      setAttributeByHeaderCellIndex: (columnIndex: number, attribute: string, value: string) => {
        this.columns[columnIndex].setAttribute(attribute, value);
      },
      setClassNameByHeaderCellIndex: (columnIndex: number, className: string) => {
        const attributesMapping = {
          [cssClasses.HEADER_CELL_SORTED]: 'sorted',
          [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
        };
        this.columns[columnIndex].toggleAttribute(attributesMapping[className], true);
      },
      removeClassNameByHeaderCellIndex: (columnIndex: number, className: string) => {
        const attributesMapping = {
          [cssClasses.HEADER_CELL_SORTED]: 'sorted',
          [cssClasses.HEADER_CELL_SORTED_DESCENDING]: 'sortedDescending'
        };
        this.columns[columnIndex].toggleAttribute(attributesMapping[className], false);
      },
      notifySortAction: (data: SortActionEventDetail) => {
        this.dispatchEvent(new CustomEvent<SortActionEventDetail>('sorted', {detail: data}));
      },
      getTableContainerHeight: () => this.tableContainerElement.getBoundingClientRect().height,
      getTableHeaderHeight: () => this.headerRowElement.getBoundingClientRect().height,
      setProgressIndicatorStyles: (styles: ProgressIndicatorStyles) => {
        this.progressIndicator.style.top = styles.top;
        this.progressIndicator.style.height = styles.height;
      },
      setSortStatusLabelByHeaderCellIndex: (columnIndex: number, sortValue: SortValue) => {
        const column = this.columns[columnIndex];
        if (column.sortable) {
          const mappings = {
            [SortValue.ASCENDING]: messages.SORTED_IN_ASCENDING,
            [SortValue.DESCENDING]: messages.SORTED_IN_DESCENDING,
          };
          // @ts-ignore
          column.sortButton.ariaLabel = mappings[sortValue];
        }
      }
    };
  }

  protected renderTemplate(template: string, params: Object) {
    for (const [key, value] of Object.entries(params)) {
      template = template.replace(`:${key}`, value);
    }

    return template;
  }

  hideRows(rows: DataTableRow[] = this.rows) {
    for (const row of rows) {
      row.hidden = true;
      row.classList.remove('without-bottom-border');
    }
  }

  showRows(rows: DataTableRow[] = this.rows) {
    for (const row of rows) {
      row.hidden = false;
    }

    // Add bottom border to the last row
    rows.slice(-1)[0]?.classList.add('without-bottom-border');
  }
}
