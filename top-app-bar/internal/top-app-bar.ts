import '@material/web/elevation/elevation.js';
import {html, LitElement} from 'lit';
import {property} from 'lit/decorators/property.js';

/**
 * TopAppBar component.
 */
export abstract class TopAppBar extends LitElement {
    /** Whether the top app bar is sticky. */
    @property({type: Boolean, reflect: true}) sticky = false;

    protected override render() {
        return html`
            ${this.renderLeadingContent()}
            ${this.renderHeadline()}
            ${this.renderTrailingContent()}
            <md-elevation></md-elevation>
        `;
    }

    protected renderLeadingContent() {
        return html`<slot name="start"></slot>`;
    }

    protected renderHeadline() {
        return html`<slot></slot>`;
    }

    protected renderTrailingContent() {
        return html`<slot name="end"></slot>`;
    }

    override connectedCallback() {
        super.connectedCallback();
        const observer = new IntersectionObserver(
          ([e]) => this.onStuckChanged(e),
          {threshold: [1]}
        );

        observer.observe(this)
    }

    protected onStuckChanged(e: IntersectionObserverEntry) {
        const isStuck = e.intersectionRatio < 1;
        if (this.sticky) {
            e.target.classList.toggle('is-scrolling', isStuck);
        }
    }
}
