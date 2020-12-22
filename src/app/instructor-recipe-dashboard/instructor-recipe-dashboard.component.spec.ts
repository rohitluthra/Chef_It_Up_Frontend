import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRecipeDashboardComponent } from './instructor-recipe-dashboard.component';

describe('InstructorRecipeDashboardComponent', () => {
  let component: InstructorRecipeDashboardComponent;
  let fixture: ComponentFixture<InstructorRecipeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorRecipeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorRecipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
