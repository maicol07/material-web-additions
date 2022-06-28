import {IconButton as MWCIconButton} from '@material/mwc-icon-button';
import {styles} from './mwa-icon-button.css';
import {
  customElement,
  property
} from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwa-icon-button': IconButton;
  }
}

@customElement('mwa-icon-button')
export class IconButton extends MWCIconButton {
  /** @internal */
  static styles = [...MWCIconButton.styles, styles];

  /** Size of the icon button. */
  @property({type: String}) density?: 'tight' | 'comfortable' | 'dense' | 'compact' | 'extra-compact';
}
