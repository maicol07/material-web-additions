
import {TextArea as MWCTextarea} from '@material/mwc-textarea';
import {customElement, property} from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-textarea': Textarea;
  }
}


@customElement('mwa-drawer')
export class Textarea extends MWCTextarea {
  private _initialValidationMessage: string | undefined;

  @property({type: Boolean, attribute: 'auto-expand'}) autoExpand = false;

  /**
   * Fix mwc-select when handling validation message
   * It gets native input validation message when no default validationMessage is set.
   *
   * Related issue:
   * https://github.com/material-components/material-web/issues/971
   *
   */
  firstUpdated() {
    if (this.validationMessage) {
      this._initialValidationMessage = this.validationMessage;
    }

    super.firstUpdated();
  }

  /**
   * @see https://github.com/material-components/material-web/issues/455#issuecomment-574330528
   */
  handleInputChange() {
    super.handleInputChange();
    if (this.autoExpand) {
      // const outer = this.formElement;
      // const inner = outer.shadowRoot.getElementById("text-field");
      // outer.rows = 3;
      // await null;
      while (this.formElement.scrollHeight > this.formElement.offsetHeight) {
        this.rows++;
        // await null;
      }
    }
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
