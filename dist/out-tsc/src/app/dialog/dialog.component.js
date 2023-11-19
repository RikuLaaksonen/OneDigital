import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let DialogComponent = class DialogComponent {
    constructor() {
        this.closable = true;
        this.id = '';
        this.title = '';
        this.ariaLabel = 'Dialog';
        this.ariaLabelledby = '';
        this.content = '';
        this.visible = false;
        this.closed = new EventEmitter();
    }
    openDialog(id) {
        if (this.id === id) {
            this.visible = true;
        }
    }
    onClose() {
        if (this.closable) {
            this.visible = false;
            this.closed.emit(this.id);
        }
    }
};
__decorate([
    Input()
], DialogComponent.prototype, "closable", void 0);
__decorate([
    Input()
], DialogComponent.prototype, "id", void 0);
__decorate([
    Input()
], DialogComponent.prototype, "title", void 0);
__decorate([
    Input()
], DialogComponent.prototype, "ariaLabel", void 0);
__decorate([
    Input()
], DialogComponent.prototype, "ariaLabelledby", void 0);
__decorate([
    Input()
], DialogComponent.prototype, "content", void 0);
__decorate([
    Output()
], DialogComponent.prototype, "closed", void 0);
DialogComponent = __decorate([
    Component({
        selector: 'app-dialog',
        templateUrl: './dialog.component.html',
        styleUrls: ['./dialog.component.css'],
    })
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map