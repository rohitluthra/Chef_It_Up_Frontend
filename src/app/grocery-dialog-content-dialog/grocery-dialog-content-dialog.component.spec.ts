import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryDialogContentDialogComponent } from './grocery-dialog-content-dialog.component';

describe('GroceryDialogContentDialogComponent', () => {
  let component: GroceryDialogContentDialogComponent;
  let fixture: ComponentFixture<GroceryDialogContentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryDialogContentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryDialogContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
