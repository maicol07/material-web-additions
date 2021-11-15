import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js'
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {LayoutGridCellBase} from './mwc-layout-grid-cell.js';

export class LayoutGridBase extends LitElement {
  @property({type: Boolean, reflect: true}) inner = false;

  @property({type: Boolean, reflect: true}) fixedColumnWidth = false;

  @property({type: String}) position;

  constructor() {
    super();

    // Handle addition of cells
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes &&
          mutation.addedNodes.length > 0) {
          // At least one cell was added - re-render grid to make sure all
          // children elements are in right order and have own slots
          this.requestUpdate();
        }
      }
    });
    // Start observing the root node for configured mutations
    observer.observe(this, {childList: true});
  }

  getRenderClasses(): ClassInfo {
    return {
      'mdc-layout-grid': !this.inner,
      'mdc-layout-grid__inner': this.inner,
      'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
      'mdc-layout-grid--align-top': this.position === 'top',
      'mdc-layout-grid--align-middle': this.position === 'middle',
      'mdc-layout-grid--align-bottom': this.position === 'bottom',
    }
  }

  getChildren() {
      return Array.from(this.children).map((element, i) => {
          element.setAttribute('slot', 'slot' + i);
          return html`
              <div class="${this.generateCellClasses(element)}">
                  <slot name="slot${i}" @slotchange=${(e) => this.removeCell(e)}></slot>
              </div>`;
      })
  }

  render() {
    if (this.inner) {
      return html`
          <div class="${classMap(this.getRenderClasses())}">
              ${this.getChildren()}
          </div>`;
    } else {
      return html`
          <div class="${classMap(this.getRenderClasses())}"">
              <div class="mdc-layout-grid__inner">
                  ${this.getChildren()}
              </div>
          </div>`;
    }
  }

  protected removeCell(e) {
    const slotElement = e.target! as HTMLSlotElement;
    const nodes = slotElement.assignedElements();

    if (nodes.length == 0) {
      // Slot is empty - remove cell
      (slotElement.parentNode! as HTMLElement).remove();
    }
  }

  protected generateCellClasses(child: Element) {
    const classes = ['mdc-layout-grid__cell'];

    if (child instanceof LayoutGridCellBase) {
      // Child is also a LayoutGridBase - get its attributes and set them to
      // cell element

      if (child.span) {
        classes.push(`mdc-layout-grid__cell--span-${child.span}`);
      }

      const spans = {
        desktop: child.spanDesktop,
        tablet: child.spanTablet,
        phone: child.spanPhone
      }

      for (const [device, value] of Object.entries(spans)) {
        if (value) {
          classes.push(`mdc-layout-grid__cell--span-${value}-${device}`);
        }
      }

      if (child.order) {
        classes.push('mdc-layout-grid__cell--order-' + child.order);
      }
      if (child.align) {
        classes.push('mdc-layout-grid__cell--align-' + child.align);
      }
    }

    return classes.join(' ');
  }
}
