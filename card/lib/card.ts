import '@material/web/ripple/ripple.js';
import '@material/web/focus/focus-ring.js';

import {html, LitElement, nothing, PropertyValues, TemplateResult} from 'lit';
import {queryAssignedElements, queryAsync, state} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {MdRipple} from '@material/web/ripple/ripple.js';
import {pointerPress, shouldShowStrongFocus} from '@material/web/focus/strong-focus.js';
import {property} from 'lit/decorators/property.js';
import {ripple} from '@material/web/ripple/directive.js';

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

    /**
     * @internal
     * @protected
     */
    @queryAsync('md-ripple') protected ripple!: Promise<MdRipple | null>;

    /**
     * @internal
     * @protected
     */
    @state() protected showFocusRing = false;

  /**
   * @internal
   * @protected
   */
  @state() protected showRipple = false;

    handlePointerDown(e: PointerEvent) {
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }

    override render() {
        return html`
            <div class="${classMap(this.getRenderClasses())}">
                ${this.renderPrimaryAction()}
                ${this.renderActions()}
                ${this.renderRipple()}
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

  /**
   * @internal
   * @protected
   */
  protected getRipple = () => {
    this.showRipple = true;
    return this.ripple;
  };

    protected renderPrimaryAction() {
        return html`
            <div class="${classMap(this.getPrimaryActionRenderClasses())}" tabindex="0" aria-label="${this.ariaLabel}"
                 @focus="${this.handleFocus}"
                 @blur="${this.handleBlur}"
                 @pointerdown="${this.handlePointerDown}"
                 ${ripple(this.getRipple)}>
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
            <md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring>`;
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
        return this.showRipple ? html`
            <md-ripple class="${classMap(this.getRippleRenderClasses())}" ?disabled=${this.disabled}></md-ripple>` : nothing;
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

    protected handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }

    protected handleBlur() {
        this.showFocusRing = false;
    }

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.icons.length > 0 || this.buttons.length > 0) {
        return html`
            <div class="${classMap(this.getRenderActionsClasses())}"
                 @focus="${this.handleFocus}"
                 @blur="${this.handleBlur}"
                 @pointerdown="${this.handlePointerDown}"
                 ${ripple(this.getRipple)}>
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
