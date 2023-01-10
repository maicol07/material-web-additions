import '@material/web/ripple/ripple.js';
import '@material/web/focus/focus-ring.js';

import {html, PropertyValues, TemplateResult} from 'lit';
import {query, queryAssignedElements, state} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';
import {ActionElement, BeginPressConfig, EndPressConfig} from '@material/web/actionelement/action-element.js';
import {MdRipple} from '@material/web/ripple/ripple.js';
import {pointerPress, shouldShowStrongFocus} from '@material/web/focus/strong-focus.js';
import {property} from 'lit/decorators/property.js';

export abstract class Card extends ActionElement {
    /** Allows the card to be clickable with a ripple effect. */
    @property({type: Boolean, reflect: true}) clickable = false;
    /** @internal */
    disabled: boolean;
    /**
     * @internal
     * @protected
     */
        // @ts-ignore
    @queryAssignedElements({slot: 'button'}) protected buttons!: HTMLElement[];
    /**
     * @internal
     * @protected
     */
        // @ts-ignore
    @queryAssignedElements({slot: 'icon'}) protected icons!: HTMLElement[];

    /**
     * @internal
     * @protected
     */
        // @ts-ignore
    @query('md-ripple') protected ripple!: MdRipple;

    /**
     * @internal
     * @protected
     */
    @state() protected showFocusRing = false;

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

    override beginPress({positionEvent}: BeginPressConfig) {
        this.ripple.beginPress(positionEvent);
    }

    override endPress(options: EndPressConfig) {
        this.ripple.endPress();
        super.endPress(options);
    }

    override handlePointerDown(e: PointerEvent) {
        super.handlePointerDown(e);
        pointerPress();
        this.showFocusRing = shouldShowStrongFocus();
    }

    override handlePointerLeave(e: PointerEvent) {
        super.handlePointerLeave(e);
        this.ripple.endHover();
    }

    protected override update(_changedProperties: PropertyValues) {
        if (_changedProperties.has('clickable')) {
            this.disabled = !this.clickable;
        }
        super.update(_changedProperties);
    }

    protected renderPrimaryAction() {
        return html`
            <div class="${classMap(this.getPrimaryActionRenderClasses())}" tabindex="0" aria-label="${this.ariaLabel}"
                 @focus="${this.handleFocus}"
                 @blur="${this.handleBlur}"
                 @pointerdown="${this.handlePointerDown}"
                 @pointerup="${this.handlePointerUp}"
                 @pointercancel="${this.handlePointerCancel}"
                 @pointerleave="${this.handlePointerLeave}"
                 @pointerenter="${this.handlePointerEnter}"
                 @click="${this.handleClick}"
                 @contextmenu="${this.handleContextMenu}">
                <slot></slot>
            </div>`;
    }

    protected renderRipple() {
        return html`
            <md-ripple class="${classMap(this.getRippleRenderClasses())}" ?disabled=${this.disabled}></md-ripple>`;
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

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.icons.length > 0 || this.buttons.length > 0) {
        return html`
            <div class="${classMap(this.getRenderActionsClasses())}"
                 @focus="${this.handleFocus}"
                 @blur="${this.handleBlur}"
                 @pointerdown="${this.handlePointerDown}"
                 @pointerup="${this.handlePointerUp}"
                 @pointercancel="${this.handlePointerCancel}"
                 @pointerleave="${this.handlePointerLeave}"
                 @pointerenter="${this.handlePointerEnter}"
                 @click="${this.handleClick}"
                 @contextmenu="${this.handleContextMenu}">
                ${this.wrapButtonSlot(buttonSlotTemplate)}
                ${this.wrapIconSlot(iconSlotTemplate)}
            </div>`;
    }
      return html`
          ${buttonSlotTemplate}
          ${iconSlotTemplate}
      `;
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

    protected handlePointerEnter(e: PointerEvent) {
        this.ripple.beginHover(e);
    }

    protected handleFocus() {
        this.showFocusRing = shouldShowStrongFocus();
    }

    protected handleBlur() {
        this.showFocusRing = false;
    }
}
