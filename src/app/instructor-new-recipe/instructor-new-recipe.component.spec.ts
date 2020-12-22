import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNewRecipeComponent } from './instructor-new-recipe.component';

describe('InstructorNewRecipeComponent', () => {
  let component: InstructorNewRecipeComponent;
  let fixture: ComponentFixture<InstructorNewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorNewRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
