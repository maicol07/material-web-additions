import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export type AspectRatioType = '16-9' | 'square' | '';

export class CardMediaBase extends LitElement {
  /**
   * The aspect ratio of the media. Can be one of these values: '16-9' | 'square' | ''
   * @var {AspectRatioType}
   */
  @property({type: String}) aspectRatio: AspectRatioType = '16-9';

  render() {
    // (zoofadoofa): we may want to support css property for aspectRatio
    // providing an aspect ratio mixin override of the mdc mixin
    const classes = {
      'mdc-card__media--16-9': this.aspectRatio === '16-9',
      'mdc-card__media--square': this.aspectRatio === 'square'
    };
    return html`
      <div class="mdc-card__media ${classMap(classes)}">
        <div class="mdc-card__media-content">
          <slot></slot>
        </div>
      </div>`;
  }
}
