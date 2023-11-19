import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() closable = true;
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() ariaLabel: string = 'Dialog';
  @Input() ariaLabelledby: string = '';
  @Input() content: string = '';
  visible = false;

  @Output() closed: EventEmitter<string> = new EventEmitter<string>();

  openDialog(id: string): void {
    if (this.id === id) {
      this.visible = true;
    }
  }

  onClose(): void {
    if (this.closable) {
      this.visible = false;
      this.closed.emit(this.id);
    }
  }
}
