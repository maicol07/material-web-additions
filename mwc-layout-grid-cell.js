import { __decorate } from "tslib";
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
import { html, LitElement, property } from 'lit-element';
export class LayoutGridCellBase extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property({ type: Object })
], LayoutGridCellBase.prototype, "span", void 0);
__decorate([
    property({ type: Number })
], LayoutGridCellBase.prototype, "order", void 0);
__decorate([
    property({ type: String })
], LayoutGridCellBase.prototype, "align", void 0);
//# sourceMappingURL=mwc-layout-grid-cell.js.map