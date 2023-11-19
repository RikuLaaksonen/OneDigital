import { TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';
describe('DialogComponent', () => {
    let component;
    let fixture;
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
        // Get the instance of the component
        const dialogComponent = fixture.componentInstance;
        // Check if the dialog is initially not visible
        expect(dialogComponent.visible).toBeFalsy();
        // Set the visible property to true
        dialogComponent.visible = true;
        // Trigger change detection to apply the changes
        fixture.detectChanges();
        // Check if the dialog is now visible
        expect(dialogComponent.visible).toBeTruthy();
    });
});
//# sourceMappingURL=dialog.component.spec.js.map