import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtensilDialogContentDialogComponent } from './utensil-dialog-content-dialog.component';

describe('UtensilDialogContentDialogComponent', () => {
  let component: UtensilDialogContentDialogComponent;
  let fixture: ComponentFixture<UtensilDialogContentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtensilDialogContentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtensilDialogContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
