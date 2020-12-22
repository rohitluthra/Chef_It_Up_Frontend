import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbardComponent } from './student-dashbard.component';

describe('StudentDashbardComponent', () => {
  let component: StudentDashbardComponent;
  let fixture: ComponentFixture<StudentDashbardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashbardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
