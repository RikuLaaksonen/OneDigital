import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  formData: any = {};

  submitForm(dialog: DialogComponent): void {
    console.log('Form submitted with value:', this.formData.inputValue);
    dialog.onClose();
  }
}
