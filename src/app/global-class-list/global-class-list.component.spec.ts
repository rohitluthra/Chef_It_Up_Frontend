import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalClassListComponent } from './global-class-list.component';

describe('GlobalClassListComponent', () => {
  let component: GlobalClassListComponent;
  let fixture: ComponentFixture<GlobalClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
