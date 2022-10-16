
import {TextField as MWCTextField} from '@material/mwc-textfield';
import {styles} from './mwa-textfield.css';
import {customElement, property, query, queryAssignedElements} from 'lit/decorators.js';
import {html, TemplateResult} from 'lit-html';
import {classMap} from 'lit-html/directives/class-map';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-textfield': TextField;
  }
}


@customElement('mwa-drawer')
export class TextField extends MWCTextField {
  static styles = [...MWCTextField.styles, styles];

  /** Size of the select. */
  @property({type: String}) density?: 'tight' | 'comfortable' | 'dense' | 'compact' | 'extra-compact';

  @queryAssignedElements({slot: 'icon'}) private leadingIconSlotElements!: HTMLElement[];

  private _initialValidationMessage: string | undefined;

  iconSlotChanged(event: Event) {
    // TODO: Check in storybook
    const slotClass = 'mdc-select__icon';
    const rootClass = 'mdc-text-field--with-leading-icon';

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

  renderLeadingIcon() {
    return this.renderIcon(this.icon);
  }

  renderTrailingIcon() {
    return this.renderIcon(this.iconTrailing, true);
  }

  renderIcon(icon: string, isTrailingIcon: boolean = false): TemplateResult {
    /** @classMap */
    const classes = {
      'mdc-text-field__icon--leading': !isTrailingIcon,
      'mdc-text-field__icon--trailing': isTrailingIcon
    };

    return html`
      <span class="mdc-text-field__icon">
          <slot name="icon${isTrailingIcon ? 'Trailing' : ''}" class="mdc-text-field__icon ${classMap(classes)}" @slotchange=${this.iconSlotChanged}>
              <i class="material-icons">${icon}</i>
          </slot>
      </span>
    `;
  }

  get nativeValidationMessage() {
    return this.formElement.validationMessage;
  }

  /**
   * Fix mwc-textfield when handling validation message
   * It gets native input validation message when no default validationMessage is set.
   *
   * Related issue:
   * https://github.com/material-components/material-components-web-components/issues/971
   *
   */
  firstUpdated() {
    if (this.validationMessage) {
      this._initialValidationMessage = this.validationMessage;
    }

    super.firstUpdated();
  }

  reportValidity() {
    const isValid = super.reportValidity();

    // Note(cg): override validationMessage only if no initial message set.
    if (!this._initialValidationMessage && !isValid) {
      this.validationMessage = this.nativeValidationMessage;
    }

    return isValid;
  }
}
