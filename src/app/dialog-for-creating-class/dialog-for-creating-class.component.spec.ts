import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForCreatingClassComponent } from './dialog-for-creating-class.component';

describe('DialogForCreatingClassComponent', () => {
  let component: DialogForCreatingClassComponent;
  let fixture: ComponentFixture<DialogForCreatingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForCreatingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForCreatingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
