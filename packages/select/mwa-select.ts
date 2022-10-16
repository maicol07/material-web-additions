import {Select as MWCSelect} from '@material/mwc-select';
import {styles} from './mwa-select.css';
import {customElement, property, queryAssignedElements} from 'lit/decorators.js';
import {html, TemplateResult} from 'lit-html';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-select': Select;
  }
}


@customElement('mwa-select')
export class Select extends MWCSelect {
  static styles = [...MWCSelect.styles, styles];

  private _initialValidationMessage: string | undefined;

  /** Size of the select. */
  @property({type: String}) density?: 'tight' | 'comfortable' | 'dense' | 'compact' | 'extra-compact';

  @queryAssignedElements({slot: 'icon'}) private leadingIconSlotElements!: HTMLElement[];

  renderLeadingIcon(): TemplateResult<1> {
    return html`
      <span>
          <slot name="icon" @slotchange=${this.leadingIconSlotChanged}></slot>
      </span>
    `;
  }

  leadingIconSlotChanged(event: Event) {
    const slotClass = 'mdc-select__icon';
    const rootClass = 'mdc-select--with-leading-icon';

    const slot = event.target as HTMLSlotElement;
    const slotParent: HTMLSpanElement | null = slot.parentElement;

    if (this.leadingIconSlotElements.length > 0) {
      slotParent?.classList.add(slotClass);
      this.formElement.classList.add(rootClass);
    } else {
      slotParent?.classList.remove(slotClass);
      this.formElement.classList.remove(rootClass);
    }
  }

  /**
   * Fix mwc-select when handling validation message
   * It gets native input validation message when no default validationMessage is set.
   *
   * Related issue:
   * https://github.com/material-components/material-web/issues/971
   *
   */
  async firstUpdated() {
    if (this.validationMessage) {
      this._initialValidationMessage = this.validationMessage;
    }

    await super.firstUpdated();
  }

  reportValidity() {
    const isValid = super.reportValidity();

    // Note(cg): override validationMessage only if no initial message set.
    if (!this._initialValidationMessage && !isValid) {
      this.validationMessage = this.nativeValidationMessage;
    }

    return isValid;
  }

  get nativeValidationMessage() {
    return this.formElement.validationMessage;
  }
}
