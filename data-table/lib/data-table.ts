import '@material/web/linearprogress/linear-progress.js';
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
import {IconButton} from '@material/web/iconbutton/lib/icon-button.js';
import {LinearProgress} from '@material/web/linearprogress/lib/linear-progress.js';
import {DataTableRow} from './data-table-row.js';
import {BaseElement} from '@material/mwc-base';
import {Select} from '@material/web/select/lib/select.js';

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

export interface PageSizeChangedDetail {
  pageSize: number
}

export type PaginationAction = 'current' | 'first' | 'previous' | 'next' | 'last';

export interface PageChangedDetail {
  action: PaginationAction,
}

export interface PaginatedDetail {
  firstRow: number,
  lastRow: number,
  pageSize: number
}

export class DataTable extends BaseElement {
  /**
   * Enable/disable pagination.
   */
  @property({type: Boolean, reflect: true}) paginated = false;
  /**
   * JSON array with the page sizes to be used in the pagination and shown as page size select options.
   */
  @property({type: String, reflect: true}) pageSizes = '[10, 25, 100]';
  /**
   * Label to show before the page size select.
   */
  @property({type: String, reflect: true}) pageSizesLabel = 'Rows per page:';
  /**
   * Index of the first row to be shown on the current page.
   */
  @property({type: Number, reflect: true}) firstRowOfPage = 1;
  /** @internal */
  protected pageSizesArray: number[] = JSON.parse(this.pageSizes);
  /**
   * Size of the current page.
   */
  @property({type: Number, reflect: true}) currentPageSize = this.pageSizesArray[0];
  /**
   * Index of the last row to be shown on the current page.
   */
  @property({type: Number, reflect: true}) lastRowOfPage = this.currentPageSize;
  /**
   * Label pattern to show after the page size select that indicates the current rows shown in the page.
   * It should contain the following parameters: `:firstRow`, `:lastRow`, `:totalRows`
   */
  @property({type: String}) paginationTotalLabel = ':firstRow-:lastRow of :totalRows';
  /**
   * Whether the loading indicator is active.
   */
  @property({type: Boolean, reflect: true})
  inProgress = false;
  /**
   * Overall height of the table. Available in three different measures.
   */
  @property({type: String, reflect: true})
  density?: '' | 'tight' | 'comfortable' | 'dense' | 'compact';
  /** @internal */
      // @ts-ignore
  @queryAssignedElements({slot: 'header-cell', selector: 'md-data-table-column'}) columns!: DataTableColumn[];
  /** @internal */
      // @ts-ignore
  @queryAssignedElements({slot: 'row', selector: 'md-data-table-row'}) rows!: DataTableRow[];
  /** @internal */
      // @ts-ignore
  @query('.mdc-data-table') protected tableElement!: HTMLTableElement;
  /** @internal */
      // @ts-ignore
  @query('.mdc-data-table__table-container') protected tableContainerElement!: HTMLTableElement;
  /** @internal */
      // @ts-ignore
  @query('.mdc-data-table__header-row') protected headerRowElement!: HTMLTableSectionElement;
  /** @internal */
      // @ts-ignore
  @query('.mdc-data-table__progress-indicator') protected progressIndicator!: LinearProgress;

  /** @internal */
  protected mdcDataTable?: MDCDataTable;
  /** @internal */
  protected mdcRoot: HTMLDivElement = this.tableElement;
  /** @internal */
      // @ts-ignore (TypeScript bug)
  protected readonly mdcFoundationClass = MDCDataTableFoundation;
  /** @internal */
      // @ts-ignore (TypeScript bug)
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

  override render() {
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

  onHeaderCellSlotChange() {
    this.requestUpdate();
    const sortColumn = this.columns.find((column) => column.sortable && column.sorted);
    if (sortColumn) {
      sortColumn.onSortButtonClicked(new CustomEvent<{selected: boolean}>('icon-button-toggle-change', {detail: {selected: !sortColumn.sortedDescending}}));
    }
  }

  /** @internal */
  rowCallback = (e: Event) => this.mdcFoundation.handleRowCheckboxChange(e);

  /** @internal */
  headerRowCallback = () => this.mdcFoundation.handleHeaderRowCheckboxChange();

  /** @internal */
  filterColumnCallback = (e: Event) => {
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

    /**
     * Event emitted when the data table has been filtered.
     *
     * Event detail: `FilteredDetail`;
     */
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
        let aValue: string | number = a.textContent;
        let bValue: string | number = b.textContent;

        if (column.type === 'numeric') {
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
        row.parentElement.append(row);
      }

      this.inProgress = false;
      column.sorted = true;
    }
    column.withSortButton = true;

    /**
     * Event emitted when the data table has been filtered.
     *
     * Event detail: `FilteredDetail`;
     */
    this.dispatchEvent(new CustomEvent<SortedDetail>('sorted', {
      detail: {
        column: event.detail.column,
        isDescending,
      }
    }));
  };

  protected renderPagination() {
    if (this.paginated) {
      const initialPageLabel = this.firstRowOfPage < 1 ? 1 : this.firstRowOfPage;
      const lastPageLabel = this.lastRowOfPage > this.rows.length ? this.rows.length : this.lastRowOfPage;
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
                  'firstRow': initialPageLabel,
                  'lastRow': lastPageLabel,
                  'totalRows': this.rows.length,
                })}
              </div>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="first"
                               ?disabled=${this.firstRowOfPage <= 1}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-first-button-icon">
                  <md-icon slot="icon">first_page</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="previous"
                               ?disabled=${this.firstRowOfPage <= 1}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-previous-button-icon">
                  <md-icon>chevron_left</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="next"
                               ?disabled=${this.lastRowOfPage >= this.rows.length}
                               @click=${this.onPaginationButtonClicked}>
                <slot name="pagination-next-button-icon">
                  <md-icon>chevron_right</md-icon>
                </slot>
              </md-filled-icon-button>
              <md-filled-icon-button class="mdc-data-table__pagination-button"
                               data-page="last"
                               ?disabled=${this.lastRowOfPage >= this.rows.length}
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
    this.dispatchEvent(new CustomEvent<PageSizeChangedDetail>('pagesizechanged', {
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

    this.dispatchEvent(new CustomEvent<PageChangedDetail>('pagechanged', {
      detail: {
        action
      }
    }));

    this.paginate(action);
  }

  protected paginate(action: PaginationAction = 'current') {
    this.pageSizesArray = JSON.parse(this.pageSizes);
    if (!this.pageSizesArray.includes(this.currentPageSize)) {
      this.currentPageSize = this.pageSizesArray[0];
    }

    this.dispatchEvent(new CustomEvent<PaginatedDetail>('paginated', {
      detail: {
        pageSize: this.currentPageSize,
        firstRow: this.currentFirstRow,
        lastRow: this.currentLastRow
      }
    }));

    if (this.paginated) {
      this.hideRows();

      switch (action) {
        case 'first':
          this.firstRowOfPage = 1;
          this.lastRowOfPage = this.currentPageSize;
          break;
        case 'previous':
          this.firstRowOfPage -= this.currentPageSize;
          this.lastRowOfPage -= this.currentPageSize;
          break;
        case 'next':
          this.firstRowOfPage += this.currentPageSize;
          this.lastRowOfPage += this.currentPageSize;
          break;
        case 'last':
          this.firstRowOfPage = this.rows.length - this.currentPageSize + 1;
          this.lastRowOfPage = this.rows.length;
          break;
      }

      const rowsToShow = this.rows.slice(this.firstRowOfPage - 1, this.lastRowOfPage);
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
      getRowCount: () => this.rows.length,
      getRowElements: () => this.rows,
      getRowIdAtIndex: (rowIndex: number) => this.rows?.[rowIndex].id ?? null,
      getRowIndexByChildElement: (el: Element) => this.rows.findIndex((row) => row.contains(el)),
      getSelectedRowCount: () => this.rows.filter((row) => row.selected).length,
      isCheckboxAtRowIndexChecked: (rowIndex: number) => this.rows[rowIndex].selected,
      isHeaderRowCheckboxChecked: () => this.headerCheckbox?.checked ?? false,
      isRowsSelectable: () => this.headerCheckbox !== undefined ||
        this.rows.filter((row) => row.checkboxCell !== undefined).length > 0,
      notifyRowSelectionChanged: (data: MDCDataTableRowSelectionChangedEventDetail) => {
        /**
         * Event emitted when row checkbox is checked or unchecked.
         *
         * Event detail: `RowSelectionChangedDetail`.
         */
        this.dispatchEvent(new CustomEvent<RowSelectionChangedDetail>(
          'rowSelectionChanged',
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
        /**
         * Event emitted when header row checkbox is checked.
         */
        this.dispatchEvent(new CustomEvent('selectedAll'));
      },
      notifyUnselectedAll: () => {
        /**
         * Event emitted when header row checkbox is unchecked.
         */
        this.dispatchEvent(new CustomEvent('unselectedAll'));
      },
      notifyRowClick: (detail: RowClickEventData) => {
        /**
         * Event emitted when a row has been checked or unchecked.
         *
         * Event detail: `RowClickEventData`.
         */
        this.dispatchEvent(new CustomEvent('rowClick', {detail}));
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
        /**
         * Event emitted when a column has been sorted.
         *
         * Event detail: `SortActionEventDetail`.
         */
        this.dispatchEvent(new CustomEvent('sorted', {detail: data}));
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

  protected hideRows(rows: DataTableRow[] = this.rows) {
    for (const row of rows) {
      row.hidden = true;
      row.classList.remove('without-bottom-border');
    }
  }

  protected showRows(rows: DataTableRow[] = this.rows) {
    for (const row of rows) {
      row.hidden = false;
    }

    // Add bottom border to the last row
    rows.slice(-1)[0]?.classList.add('without-bottom-border');
  }
}
