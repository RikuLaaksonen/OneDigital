import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.formData = {};
    }
    title(title) {
        throw new Error('Method not implemented.');
    }
    submitForm(dialog) {
        console.log('Form submitted with value:', this.formData.inputValue);
        dialog.onClose();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map