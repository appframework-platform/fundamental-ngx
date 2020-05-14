import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputMobileComponent } from './multi-input-mobile.component';
import { MultiInputMobileConfiguration } from './multi-input-mobile-configuration';
import { DialogService } from '../../dialog/dialog-service/dialog.service';
import { DynamicComponentService } from '../../utils/dynamic-component/dynamic-component.service';
import { EventEmitter } from '@angular/core';
import { DialogModule } from '../../dialog/dialog.module';
import { MultiInputComponent } from '../multi-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MultiInputMobileComponent', () => {
    let component: MultiInputMobileComponent;
    let anyComponent: any;
    let fixture: ComponentFixture<MultiInputMobileComponent>;

    const testedMultiInputConfigObject: MultiInputMobileConfiguration = {
        title: 'title', approveButton: 'approve', cancelButton: 'cancel', closeButton: true
    };

    const backupData: any[] = ['option 1', 'option 2', 'option 3'];


    let mockedMultiInputComponent: MultiInputComponent = <any>{
        selected: backupData,
        multiInputMobileConfig: {title: 'title', approveButton: 'approve', cancelButton: 'cancel', closeButton: true},
        providedMultiInputConfig: {title: 'title', approveButton: 'approve', cancelButton: 'cancel', closeButton: true},
        dialogDismiss: (backupArguments: any[]) => {},
        selectAllItems: () => {},
        dialogApprove: () => {},
        openChange: new EventEmitter<boolean>()
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ DialogModule, BrowserAnimationsModule ],
            declarations: [MultiInputMobileComponent],
            providers: [ DialogService , DynamicComponentService, {provide: MultiInputComponent, useValue: mockedMultiInputComponent} ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        mockedMultiInputComponent = <any>{
            selected: backupData,
            multiInputMobileConfig: {title: 'title', approveButton: 'approve', cancelButton: 'cancel', closeButton: true},
            providedMultiInputConfig: {title: 'title', approveButton: 'approve', cancelButton: 'cancel', closeButton: true},
            dialogDismiss: (backupArguments: any[]) => {},
            selectAllItems: () => {},
            dialogApprove: () => {},
            openChange: new EventEmitter<boolean>()
        };
        fixture = TestBed.createComponent(MultiInputMobileComponent);
        component = fixture.componentInstance;
        anyComponent = <any>component;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get multi input config, when it is provided', () => {
        anyComponent._multiInputComponent.multiInputMobileConfig = null;
        expect(anyComponent.getMultiInputConfig()).toEqual(testedMultiInputConfigObject);
    });

    it('should get multi input config, when it is passed by input', () => {
        anyComponent._multiInputComponent.providedMultiInputConfig = null;
        expect(anyComponent.getMultiInputConfig()).toEqual(testedMultiInputConfigObject);
    });

    it('should open and close with approve', () => {
        component.ngOnInit();
        component.ngAfterViewInit();
        spyOn(anyComponent._dialogRef._onHide, 'next');
        spyOn(anyComponent._multiInputComponent, 'dialogApprove');
        fixture.detectChanges();
        expect(component.hasOpenDialogs()).toBe(true);
        anyComponent._multiInputComponent.openChange.emit(true);
        fixture.detectChanges();
        expect(anyComponent._dialogRef._onHide.next).toHaveBeenCalledWith(false);
        component.handleApprove();
        expect(anyComponent._multiInputComponent.dialogApprove).toHaveBeenCalled();
    });

    it('should open and close with dismiss', () => {
        component.ngOnInit();
        component.ngAfterViewInit();
        spyOn(anyComponent._dialogRef._onHide, 'next');
        spyOn(anyComponent._multiInputComponent, 'dialogDismiss');
        fixture.detectChanges();
        expect(component.hasOpenDialogs()).toBe(true);
        anyComponent._multiInputComponent.selected = [];
        anyComponent._multiInputComponent.openChange.emit(true);
        fixture.detectChanges();
        expect(anyComponent._dialogRef._onHide.next).toHaveBeenCalledWith(false);
        component.handleDismiss();
        expect(anyComponent._multiInputComponent.dialogDismiss).toHaveBeenCalledWith([]);
    });
});
