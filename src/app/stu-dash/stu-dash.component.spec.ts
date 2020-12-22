import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDashComponent } from './stu-dash.component';

describe('StuDashComponent', () => {
  let component: StuDashComponent;
  let fixture: ComponentFixture<StuDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
