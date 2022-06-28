import {html} from 'lit';
import {property, query, queryAssignedElements} from 'lit/decorators.js';
import {DataTableColumn, DataTableRow} from './mwa-data-table';
import {
  MDCDataTable,
  MDCDataTableAdapter,
  MDCDataTableFoundation,
  MDCDataTableRowSelectionChangedEventDetail,
  ProgressIndicatorStyles,
  RowClickEventData,
  SortActionEventDetail
} from '@material/data-table';
import {cssClasses, messages, SortValue, strings} from '@material/data-table/constants';
import {BaseElement} from '@material/mwc-base';
import {observer} from '@material/mwc-base/observer';

import {Select} from '@material/mwc-select';
import {SelectedDetail} from '@material/mwc-list';

import {IconButton} from '@material/mwc-icon-button';
import '@material/mwc-icon-button';
import '@material/mwc-linear-progress';
import '@material/mwc-select';
import {LinearProgress} from '@material/mwc-linear-progress';
import {FilterTextFieldInputEventDetail} from './mwa-data-table-column';

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

export class DataTableBase extends BaseElement {
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
  @observer(function(this: DataTableBase, value: boolean) {
    if (value) {
      this.mdcFoundation.showProgress();
    } else {
      this.mdcFoundation.hideProgress();
    }
  })
  inProgress = false;
  /**
   * Overall height of the table. Available in three different measures.
   */
  @property({type: String, reflect: true})
  @observer(function(this: DataTableBase, value, ) {
    for (const row of this.rows) {
      row.setAttribute('density', value);
    }

    for (const column of this.columns) {
      column.setAttribute('density', value);
    }
  })
  density?: '' | 'tight' | 'comfortable' | 'dense' | 'compact';
  /** @internal */
  @queryAssignedElements({slot: 'header-cell', selector: 'mwa-data-table-column'}) columns!: DataTableColumn[];
  /** @internal */
  @queryAssignedElements({slot: 'row', selector: 'mwa-data-table-row'}) rows!: DataTableRow[];
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
  // @ts-ignore (TypeScript bug)
  protected readonly mdcFoundationClass = MDCDataTableFoundation;
  /** @internal */
  // @ts-ignore (TypeScript bug)
  protected mdcFoundation!: MDCDataTableFoundation;

  /** @internal */
  protected get headerCheckboxRow() {
    return this.columns.filter((column) => column.checkbox !== undefined)[0];
  }

  /** @internal */
  protected get headerCheckbox() {
    return this.headerCheckboxRow?.checkbox;
  }

  render() {
    return html`
        <div class="mdc-data-table">
          <div class="mdc-data-table__table-container">
              <div class="mdc-data-table__table" aria-label="${this.ariaLabel}" role="table">
                  <div class="mdc-data-table__head" role="rowgroup">
                    <div class="mdc-data-table__header-row" role="row">
                        <slot name="header-cell" @slotchange=${() => this.requestUpdate()}></slot>
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
                <mwc-linear-progress indeterminate class="mdc-data-table__linear-progress" role="progressbar" aria-label="Data is being loaded..."></mwc-linear-progress>
            </div>
        </div>
    `;
  }

  /** @internal */
  rowCallback = (e: Event) => this.mdcFoundation.handleRowCheckboxChange(e);

  /** @internal */
  headerRowCallback = () => this.mdcFoundation.handleHeaderRowCheckboxChange();

  /** @internal */
  filterColumnCallback = (e: Event) => {
    const event = e as CustomEvent<FilterTextFieldInputEventDetail>;
    const index = this.columns.indexOf(event.detail.column);
    let {text} = event.detail;

    for (const row of this.rows) {
      row.hidden = true;
    }

    const rowsToShow = this.rows.filter((row) => {
      let cellText = row.cells[index].textContent ?? '';

      if (!event.detail.caseSensitive) {
        cellText = cellText.toLowerCase();
        text = text.toLowerCase();
      }

      return cellText.search(text) !== -1;
    });

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
        columnIndex: index
      }
    }));
  };

  protected renderPagination() {
    if (this.paginated) {
      const initialPageLabel = this.firstRowOfPage < 1 ? 1 : this.firstRowOfPage;
      const lastPageLabel = this.lastRowOfPage > this.rows.length ? this.rows.length : this.lastRowOfPage;
      return html`
          <div class="mdc-data-table__pagination">
              <div class="mdc-data-table__pagination-trailing">
                  <div class="mdc-data-table__pagination-rows-per-page">
                      <div class="mdc-data-table__pagination-rows-per-page-label">
                          ${this.pageSizesLabel}
                      </div>

                      <mwc-select
                              outlined
                              className="mdc-data-table__pagination-rows-per-page-select"
                              fixedMenuPosition
                              value="${this.currentPageSize}"
                              style="--mdc-select-width: 112px; --mdc-select-height: 36px; --mdc-menu-item-height: 36px;"
                              @selected=${this.onPageSizeSelected}
                      >
                        ${this.pageSizesArray.map((rowsPerPage, index) => html`
                          <mwc-list-item value="${rowsPerPage}" ${index === 0 ? 'activated selected' : 0}>
                              ${rowsPerPage}
                          </mwc-list-item>
                        `)}
                      </mwc-select>
                  </div>

                  <div class="mdc-data-table__pagination-navigation">
                      <div class="mdc-data-table__pagination-total">
                          ${this.renderTemplate(this.paginationTotalLabel, {
                            'firstRow': initialPageLabel,
                            'lastRow': lastPageLabel,
                            'totalRows': this.rows.length,
                          })}
                      </div>
                      <mwc-icon-button class="mdc-data-table__pagination-button"
                                       data-page="first"
                                       ?disabled=${this.firstRowOfPage <= 1}
                                       @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-first-button-icon">
                              <mwc-icon>first_page</mwc-icon>
                          </slot>
                      </mwc-icon-button>
                      <mwc-icon-button class="mdc-data-table__pagination-button"
                                       data-page="previous"
                                       ?disabled=${this.firstRowOfPage <= 1}
                                       @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-previous-button-icon">
                              <mwc-icon>chevron_left</mwc-icon>
                          </slot>
                      </mwc-icon-button>
                      <mwc-icon-button class="mdc-data-table__pagination-button"
                                       data-page="next"
                                       ?disabled=${this.lastRowOfPage >= this.rows.length}
                                       @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-next-button-icon">
                              <mwc-icon>chevron_right</mwc-icon>
                          </slot>
                      </mwc-icon-button>
                      <mwc-icon-button class="mdc-data-table__pagination-button"
                                       data-page="last"
                                       ?disabled=${this.lastRowOfPage >= this.rows.length}
                                       @click=${this.onPaginationButtonClicked}>
                          <slot name="pagination-last-button-icon">
                              <mwc-icon>last_page</mwc-icon>
                          </slot>
                      </mwc-icon-button>
                  </div>
              </div>
          </div>

          <div class="mdc-data-table__progress-indicator">
              <div class="mdc-data-table__scrim"></div>
              <mwc-linear-progress class="mdc-data-table__linear-progress" indeterminate/>
          </div>
      `;
    }

    return;
  }

  protected onPageSizeSelected(e: CustomEvent<SelectedDetail>) {
    const select = e.target as Select;
    this.currentPageSize = Number.parseInt(select.value);
    this.paginate('first');
  }

  protected onPaginationButtonClicked(event: Event) {
    let button = event.target as HTMLElement;
    if (!(button instanceof IconButton)) {
      button = button.closest('mwc-icon-button') as IconButton;
    }
    const action = button.dataset.page as 'first' | 'previous' | 'next' | 'last';

    this.paginate(action);
  }

  protected paginate(action: 'current' | 'first' | 'previous' | 'next' | 'last' = 'current') {
    this.pageSizesArray = JSON.parse(this.pageSizes);
    if (!this.pageSizesArray.includes(this.currentPageSize)) {
      this.currentPageSize = this.pageSizesArray[0];
    }

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

  protected firstUpdated() {
    super.firstUpdated();
    this.paginate('first');
  }

  protected updated(_changedProperties) {
    super.updated(_changedProperties);

    for (const row of this.rows) {
      row.removeEventListener('selected', this.rowCallback);
      row.addEventListener('selected', this.rowCallback);
    }

    for (const column of this.columns) {
      column.removeEventListener('filter', this.filterColumnCallback);
      column.addEventListener('filter', this.filterColumnCallback);
    }

    this.headerCheckboxRow?.removeEventListener('checked', this.headerRowCallback);
    this.headerCheckboxRow?.addEventListener('checked', this.headerRowCallback);

    this.paginate();

    this.mdcFoundation.layout();
  }

  protected createAdapter(): MDCDataTableAdapter {
    type ClassName = typeof cssClasses[keyof typeof cssClasses];
    return {
      addClass: (className: ClassName) => {
        switch (className) {
          case cssClasses.IN_PROGRESS:
            this.tableElement.classList.add(cssClasses.IN_PROGRESS);
            break;
        }
      },
      removeClass: (className: ClassName) => {
        switch (className) {
          case cssClasses.IN_PROGRESS:
            this.tableElement.classList.remove(cssClasses.IN_PROGRESS);
            break;
        }
      },
      addClassAtRowIndex: (rowIndex: number, className: ClassName) => {
        switch (className) {
          case cssClasses.ROW_SELECTED:
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
      registerHeaderRowCheckbox: () => {},
      registerRowCheckboxes: () => {},
      removeClassAtRowIndex: (rowIndex: number, className: ClassName) => {
        switch (className) {
          case cssClasses.ROW_SELECTED:
            this.rows[rowIndex].selected = false;
        }
      },
      setAttributeAtRowIndex: (rowIndex: number, attr: string, value: string) => {
        const row = this.rows[rowIndex];
        if (row) {
          row.setAttribute(attr, value);
          switch (attr) {
            case strings.ARIA_SELECTED:
              row.selected = value === 'true';
              break;
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
          column.sortButton!.ariaLabel = mappings[sortValue];
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
