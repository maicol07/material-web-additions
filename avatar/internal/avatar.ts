import '@material/web/ripple/ripple.js';
import '@material/web/focus/md-focus-ring.js';
import '@material/web/elevation/elevation.js';
import '@material/web/button/text-button.js';

import {html, LitElement} from 'lit';
import {query, queryAssignedElements} from 'lit/decorators.js';

/**
 * Avatar component.
 *
 * @slot - The default slot for the avatar content. Can be an image or text (initials or full text to grab the initials).
 */
export abstract class Avatar extends LitElement {
    @queryAssignedElements() private contents!: HTMLElement[];
    @query('slot') private defaultSlot!: HTMLSlotElement;

    protected override render() {
        return html`
            <slot @slotchange="${this.onSlotContentsChange}"></slot>
            <md-elevation></md-elevation>
        `;
    }

    protected onSlotContentsChange() {
        let text = '';
        let element = undefined;
        console.log("a", this.defaultSlot.textContent, "b", this.defaultSlot.assignedNodes());
        if (this.contents.length == 0 && this.defaultSlot.assignedNodes().length > 0) {
            // If there are no contents, but the default slot has assigned nodes, use the default slot text
            const nodes = this.defaultSlot.assignedNodes();
            // Filter out text nodes
            const textNodes = nodes.filter((node) => node.nodeType === Node.TEXT_NODE);
            text = textNodes.map((node) => node.textContent).join('');
            element = nodes[0];
        }
        console.log(this.contents);
        if (this.contents.length == 1 && !['img', 'md-icon'].includes(this.contents[0].tagName.toLowerCase())) {
            element = this.contents[0];
            text = element.textContent!!;
        }

        if (element && text) {
            // If there are spaces, get the first and last initial
            let initials = text?.split(' ').map((word) => word[0]).join('');

            // If there are no spaces, get the first two letters
            if (!initials) {
                initials = text?.slice(0, 2);
            }

            if (initials) {
                element.textContent = initials;
            }
        }
    }
}
