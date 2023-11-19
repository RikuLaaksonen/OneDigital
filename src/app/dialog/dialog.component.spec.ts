import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog', () => {
    component.openDialog('');
    expect(component.visible).toBe(true);
  });

  it('should close the dialog', () => {
    component.visible = true;
    component.onClose();
    expect(component.visible).toBe(false);
  });

  it('should be initially not visible and become visible', () => {
    const dialogComponent = fixture.componentInstance;
    expect(dialogComponent.visible).toBeFalsy();

    dialogComponent.visible = true;
    fixture.detectChanges();
    expect(dialogComponent.visible).toBeTruthy();
  });
});
