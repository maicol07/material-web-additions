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
import {html, LitElement} from 'lit';
import {eventOptions, property, query, state} from 'lit/decorators.js';
import {RippleHandlers} from '@material/mwc-ripple/ripple-handlers';
import {classMap} from 'lit/directives/class-map.js';

export class CardPrimaryActionBase extends LitElement {
    /**
     * @internal
     */
    // eslint-disable-next-line no-undef
    static shadowRootOptions: ShadowRootInit = {
        mode: 'open',
        delegatesFocus: true
    };

    /**
     * Label to display for the `aria-label`
     */
    @property({type: Boolean}) label = '';

    /**
     * Whether to disable the ripple effect.
     */
    @property({type: Boolean}) disabled = false;

    /**
     * @internal
     * @protected
     */
    @query('div.mdc-card__primary-action') protected primaryAction!: HTMLDivElement;

    /**
     * @internal
     * @protected
     */
    @state() protected shouldRenderRipple = false;

    /**
     * @internal
     * @protected
     */
    protected rippleHandlers = new RippleHandlers(() => this.getRipple());

    async getRipple() {
        this.shouldRenderRipple = true;
        await this.updateComplete;
        return this.renderRoot.querySelector('mwc-ripple');
    }

    render() {
        const classes = {
            'mdc-card__primary-action--disabled': this.disabled
        };

        const rippleClasses = {
            'mdc-card__ripple': !this.disabled
        };

        return html`
      <div class="mdc-card__primary-action ${classMap(classes)}" tabindex="0" aria-label="${this.label}"
           @focus=${this.handleRippleFocus}
           @blur=${this.handleRippleBlur}
           @mousedown=${this.handleRippleActivate}
           @mouseenter=${this.handleRippleMouseEnter}
           @mouseleave=${this.handleRippleMouseLeave}
           @touchstart=${this.handleRippleActivate}
           @touchend=${this.handleRippleDeactivate}
           @touchcancel=${this.handleRippleDeactivate}>
          <slot></slot>
          ${this.shouldRenderRipple ? html`<mwc-ripple class="${classMap(rippleClasses)}" ?disabled=${this.disabled}></mwc-ripple>` : ''}
      </div>`;
    }

    focus() {
        this.rippleHandlers.startFocus();
        super.focus();
    }

    blur() {
        this.rippleHandlers.endFocus();
        super.blur();
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
}
