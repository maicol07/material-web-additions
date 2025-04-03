import '@material/web/ripple/ripple.js';
import '@material/web/focus/md-focus-ring.js';
import '@material/web/elevation/elevation.js';
import '@material/web/button/text-button.js';

import {html, LitElement} from 'lit';
import {property} from 'lit/decorators/property.js';

/**
 * Snackbar component.
 *
 * @event action - Fired when the action button is clicked.
 * @event close - Fired when the snackbar is closed.
 * @event closed - Fired when the snackbar is fully closed.
 * @event open - Fired when the snackbar is opened.
 * @event opened - Fired when the snackbar is fully opened.
 */
export abstract class Snackbar extends LitElement {
    /** Opened state of the snackbar. */
    @property({type: Boolean, reflect: true}) open = false;
    /** Support two lines of text. */
    @property({type: Boolean, reflect: true, attribute: 'two-lines'}) twoLines = false;
    /** Text for the action button. */
    @property({type: String, attribute: 'action-text'}) actionText?: string;
    /** Fixed position of the snackbar. */
    @property({type: Boolean, reflect: true}) fixed = false;
    /** Timeout for the snackbar to close automatically. */
    @property({type: Number, reflect: true}) timeout = 5000;

    protected override render() {
        return html`
            ${this.renderSupportingText()}
            ${this.renderAction()}
            ${this.renderIcon()}
            <md-elevation></md-elevation>
        `;
    }

    protected renderSupportingText() {
        return html`
            <div class="md-snackbar__supporting_text">
                <slot></slot>
            </div>`;
    }

    protected renderAction() {
        return html`<slot name="action">
            ${this.actionText ? html`<md-text-button class="md-snackbar__action" @click="${this.onActionClick}">${this.actionText}</md-text-button>` : ''}
        </slot>`;
    }

    protected renderIcon() {
        return html`<slot name="icon" @click="${this.close}"></slot>`;
    }

    protected onActionClick() {
        this.dispatchEvent(new CustomEvent('action', {
            bubbles: true,
            composed: true
        }));
    }

    /**
     * Closes the snackbar.
     *
     * This method will remove the 'opened' class from the snackbar and dispatch a 'close' event.
     * After a timeout, it will set the `open` property to false and dispatch a 'closed' event.
     */
    public close() {
        this.classList.remove('opened');
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true
        }));
        setTimeout(() => {
            this.open = false;
            this.dispatchEvent(new CustomEvent('closed', {
                bubbles: true,
                composed: true
            }));
        }, 200);
    }

    /**
     * Opens the snackbar.
     */
    public show() {
        this.open = true;
        this.dispatchEvent(new CustomEvent('open', {
            bubbles: true,
            composed: true
        }));
        setTimeout(() => {
            this.classList.add('opened');
            this.dispatchEvent(new CustomEvent('opened', {
                bubbles: true,
                composed: true
            }));
        }, 200);

        if (this.timeout > 0) {
            setTimeout(() => {
                this.close();
            }, this.timeout);
        }
    }

    protected override shouldUpdate(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('open')) {
            this.open ? this.show() : this.close();
        }
        return true;
    }
}
