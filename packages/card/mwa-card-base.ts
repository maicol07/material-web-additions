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
