import '@material/web/ripple/ripple.js';
import '@material/web/focus/focus-ring.js';

import {html, LitElement, PropertyValues, TemplateResult} from 'lit';
import {queryAssignedElements} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {property} from 'lit/decorators/property.js';

export abstract class Card extends LitElement {
    /** Allows the card to be clickable with a ripple effect. */
    @property({type: Boolean, reflect: true}) clickable = false;
    /** @internal */
    disabled: boolean;
    /**
     * @internal
     * @protected
     */
    @queryAssignedElements({slot: 'button'}) protected buttons!: HTMLElement[];
    /**
     * @internal
     * @protected
     */
    @queryAssignedElements({slot: 'icon'}) protected icons!: HTMLElement[];

    override render() {
        return html`
            <div class="${classMap(this.getRenderClasses())}">
                ${this.renderPrimaryAction()}
                ${this.renderActions()}
                <md-elevation shadow></md-elevation>
            </div>`;
    }

    getRenderClasses(): ClassInfo {
        return {
            'mdc-card': true
        };
    }

    getPrimaryActionRenderClasses(): ClassInfo {
        return {
            'mdc-card__primary-action': true,
            'mdc-card__primary-action--disabled': this.disabled
        };
    }

    stopActionPropagation(action: HTMLElement) {
        const events = ['click', 'pointerdown', 'pointerup', 'pointercancel', 'pointerleave', 'pointerenter', 'contextmenu'];
        for (const event of events) {
            action.addEventListener(event, (e) => {
                e.stopPropagation();
            });
        }

        action.addEventListener('focus', () => this.blur());
        action.addEventListener('blur', () => this.focus());
    }

    getRenderActionsClasses() {
        return {
            'mdc-card__actions': true,
        };
    }

    protected override update(_changedProperties: PropertyValues) {
        if (_changedProperties.has('clickable')) {
            this.disabled = !this.clickable;
        }
        super.update(_changedProperties);
    }

    protected renderPrimaryAction() {
        return html`
            <div id="primary-action"
                 class="${classMap(this.getPrimaryActionRenderClasses())}"
                 tabindex="0"
                 aria-label="${this.ariaLabel}">
                 ${this.renderRipple()}
                ${this.renderFocusRing()}
                <slot></slot>
            </div>`;
    }

    protected getRippleRenderClasses() {
        return {
            'mdc-card__ripple': true
        };
    }

    /** @soyTemplate */
    protected renderFocusRing() {
        return html`
            <md-focus-ring for="primary-action"></md-focus-ring>`;
    }

    protected onButtonSlotChanged() {
        for (const button of this.buttons) {
            button.classList.add('mdc-card__action');
            button.classList.add('mdc-card__action--button');
            this.stopActionPropagation(button);
        }
        this.requestUpdate();
    }

    protected onIconSlotChanged() {
        for (const icon of this.icons) {
            icon.classList.add('mdc-card__action');
            icon.classList.add('mdc-card__action--icon');
            this.stopActionPropagation(icon);
        }
        this.requestUpdate();
    }

    protected renderRipple() {
        return html`<md-ripple class="${classMap(this.getRippleRenderClasses())}" ?disabled=${this.disabled}></md-ripple>`;
    }

    protected wrapButtonSlot(buttonSlotTemplate: TemplateResult | string) {
        if (this.buttons.length > 0) {
            return html`
                <div class="mdc-card__action-buttons">
                    ${buttonSlotTemplate}
                </div>`;
        }
        return buttonSlotTemplate;
    }

    protected wrapIconSlot(iconSlotTemplate: TemplateResult | string) {
        if (this.icons.length > 0) {
            return html`
                <div class="mdc-card__action-icons">
                    ${iconSlotTemplate}
                </div>`;
        }
        return iconSlotTemplate;
    }

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.icons.length > 0 || this.buttons.length > 0) {
        return html`
            <div class="${classMap(this.getRenderActionsClasses())}"
                ${this.renderRipple()}>
                ${this.wrapButtonSlot(buttonSlotTemplate)}
                ${this.wrapIconSlot(iconSlotTemplate)}
            </div>`;
    }
      return html`
          ${buttonSlotTemplate}
          ${iconSlotTemplate}
      `;
  }
}
