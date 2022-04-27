/**
 @license
 Copyright 2018 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {html, LitElement, TemplateResult} from 'lit';
import {property, queryAssignedElements} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import '@material/mwc-ripple';

export class CardBase extends LitElement {
  /**
   * Whether to show the material outlined variant.
   */
  @property({type: Boolean}) outlined = false;
  /**
   * Whether to make a single action button take up the entire width of the action row.
   */
  @property({type: Boolean}) fullBleed = false;
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

  render() {
    const classes = {'mdc-card--outlined': this.outlined};
    return html`
        <div class="mdc-card ${classMap(classes)}">
          <slot></slot>
          ${this.renderActions()}
        </div>`;
  }

  protected onButtonSlotChanged() {
    for (const button of this.buttons) {
      button.classList.add('mdc-card__action');
      button.classList.add('mdc-card__action--button');
    }
    this.requestUpdate();
  }

  protected onIconSlotChanged() {
      for (const icon of this.icons) {
        icon.classList.add('mdc-card__action');
        icon.classList.add('mdc-card__action--icon');
      }
    this.requestUpdate();
  }

  protected renderActions() {
    const buttonSlotTemplate = html`<slot name="button" @slotchange=${this.onButtonSlotChanged}></slot>`;
    const iconSlotTemplate = html`<slot name="icon" @slotchange=${this.onIconSlotChanged}></slot>`;

    if (this.icons.length > 0 || this.buttons.length > 0) {
      const classes = {'mdc-card__actions--full-bleed': this.fullBleed};

      return html`
        <div class="mdc-card__actions ${classMap(classes)}">
          ${this.wrapButtonSlot(buttonSlotTemplate)}
          ${this.wrapIconSlot(iconSlotTemplate)}
        </div>`;
    }
    return html`
      ${buttonSlotTemplate}
      ${iconSlotTemplate}
    `;
  }

  protected wrapButtonSlot(buttonSlotTemplate: TemplateResult|string) {
    if (this.buttons.length > 0 && !this.fullBleed) {
      return html`
      <div class="mdc-card__action-buttons">
        ${buttonSlotTemplate}
      </div>`;
    }
    return buttonSlotTemplate;
  }

  protected wrapIconSlot(iconSlotTemplate: TemplateResult|string) {
    if (this.icons.length > 0) {
      return html`
      <div class="mdc-card__action-icons">
        ${iconSlotTemplate}
      </div>`;
    }
    return iconSlotTemplate;
  }
}

/*
import '@material/mwc-icon';
import {Ripple} from '@material/mwc-ripple/mwc-ripple';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers';
import {html, LitElement, PropertyValues, TemplateResult} from 'lit';
import {eventOptions, property, query, queryAssignedNodes, queryAsync, state} from 'lit/decorators.js';
import {ClassInfo, classMap} from 'lit/directives/class-map.js';

export class MWCCardBase extends LitElement {
  /!**
   * Optional. Default value is false. Removes the shadow and displays a hairline outline instead.
   *!/
  @property({type: Boolean}) outlined = false;
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean, attribute: 'full-bleed-actions'}) fullBleedActions = false;
  /!**
   * Optional. Define the aspect ratio for the main image, it can be 'square' or '16-9'
   *!/
  @property({type: String, attribute: 'aspect-ratio'}) aspectRatio = '16-9';
  @property({type: String}) title = '';
  @property({type: String}) subtitle = '';
  /!** URL of the background image*!/
  @property({type: String}) background = '';
  @queryAsync('mwc-ripple') ripple!: Promise<Ripple|null>;
  /!**
   * Optional. The main tappable area of the card.
   * Typically contains most (or all) card content except card actions.
   * Only applicable to cards that have a primary action that the main surface should trigger
   *!/
  @query('.mdc-card__primary-action') protected primaryActionEl!: HTMLElement;
  /!**
   * Optional. Row containing action buttons and/or icons.
   *!/
  @query('.mdc-card__actions') protected actionsEl!: HTMLElement;
  /!**
   * Optional. A group of action buttons, displayed on the left side of the card (in LTR), adjacent to action-icons
   *!/
  @query('.mdc-card__action-buttons') protected actionButtonsEl!: HTMLElement;
  /!**
   * Optional. A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to action-buttons
   *!/
  @query('.mdc-card__action-icons') protected actionIconsEl!: HTMLElement;
  @queryAssignedNodes('header') protected headerElements!: NodeListOf<HTMLElement>;
  @queryAssignedNodes('mediaContent') protected mediaElements!: NodeListOf<HTMLElement>;
  @queryAssignedNodes('primaryActionContent') protected contentElements!: NodeListOf<HTMLElement>;
  @queryAssignedNodes('actionButtons') protected actionButtonsElements!: NodeListOf<HTMLElement>;
  @queryAssignedNodes('actionIcons') protected actionIconsElements!: NodeListOf<HTMLElement>;
  @state() protected shouldRenderRipple = false;
  protected rippleHandlers = new RippleHandlers(() => {
    this.shouldRenderRipple = true;
    return this.ripple;
  });

  override focus() {
    const primaryActionEl = this.primaryActionEl;
    if (primaryActionEl) {
      this.rippleHandlers.startFocus();
      primaryActionEl.focus();
    }
  }

  override blur() {
    const primaryActionEl = this.primaryActionEl;
    if (primaryActionEl) {
      this.rippleHandlers.endFocus();
      primaryActionEl.blur();
    }
  }

  /!**
   * Used to render the lit-html TemplateResult to the element's DOM
   *!/
  render() {
    return html`
      <div class="mdc-card ${classMap(this.getRenderClasses())}" ${this.background ? `style="background-image: ${this.background}"` : ''}>
        <div class="mdc-card__primary-action" tabindex="0">
          <slot name="header"></slot>

          <div class="mdc-card__media ${classMap(this.getMediaRenderClasses())}">
            <div class="mdc-card__media-content">
                ${this.title ? html`<span class="mdc-card__title">${this.title}</span>` : ''}
              <slot name="mediaContent"></slot>
            </div>
          </div>
            <slot name="primaryActionContent"></slot>
            ${this.renderRipple()}
        </div>

          ${this.title && !this.primaryActionEl ? html`<span class="mdc-card__title">${this.title}</span>` : ''}
          ${this.subtitle ? html`<span class="mdc-card__subtitle">${this.subtitle}</span>` : ''}
        <slot></slot>

        <div class="mdc-card__actions ${classMap(this.getActionsRenderClasses())}">
          <div class="mdc-card__action-buttons">
            <slot name="actionButtons"></slot>
          </div>

          <div class="mdc-card__action-icons">
            <slot name="actionIcons"></slot>
          </div>
        </div>
      </div>
    `;
  }

  /!**
   * This method is invoked whenever the card is updated
   * @param _changedProperties Map of changed properties with old values
   *!/
  updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);

    const _hasPrimaryAction = this.hasPrimaryAction();
    const _hasActionButtons = this.actionButtonsElements.length > 0;
    const _hasActionIcons = this.actionIconsElements.length > 0;
    const _hasActions = _hasActionButtons || _hasActionIcons;

    this.primaryActionEl?.classList.toggle('mdc-card__primary-action--empty', !_hasPrimaryAction);
    this.actionButtonsEl?.classList.toggle('mdc-card__action-buttons--empty', !_hasActionButtons);
    this.actionIconsEl?.classList.toggle('mdc-card__action-icons--empty', !_hasActionIcons);
    this.actionsEl?.classList.toggle('mdc-card__actions--empty', !_hasActions);
  }

  /!** @soyTemplate *!/
  protected renderOverlay(): TemplateResult {
    return html``;
  }

  /!** @soyTemplate *!/
  protected renderRipple(): TemplateResult|string {
    return this.shouldRenderRipple ? html`<mwc-ripple class="ripple mdc-card__ripple" .disabled="${this.disabled}"></mwc-ripple>` : '';
  }

  /!** @soyTemplate *!/
  protected getRenderClasses(): ClassInfo {
    return {
      'mdc-card--outlined': this.outlined
    };
  }

  /!** @soyTemplate *!/
  protected getMediaRenderClasses(): ClassInfo {
    return {
      [`mdc-card__media--${this.aspectRatio}`]: this.aspectRatio !== ''
    };
  }

  /!** @soyTemplate *!/
  protected getActionsRenderClasses(): ClassInfo {
    return {
      ['mdc-card__actions--full-bleed']: this.fullBleedActions
    };
  }

  @eventOptions({passive: true})
  protected handleRippleActivate(evt?: Event) {
    const onUp = () => {
      window.removeEventListener('mouseup', onUp);

      this.handleRippleDeactivate();
    };

    window.addEventListener('mouseup', onUp);
    this.rippleHandlers.startPress(evt);
  }

  protected handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }

  protected handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }

  protected handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }

  protected handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }

  protected handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }

  private hasPrimaryAction(): boolean {
    const _hasHeaderEls = this.headerElements.length > 0;
    const _hasMediaEls = this.mediaElements.length > 0;
    const _hasContentEls = this.contentElements.length > 0;
    return _hasHeaderEls || _hasMediaEls || _hasContentEls;
  }
}
*/
