import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StuDashComponent } from './stu-dash/stu-dash.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SignupComponent } from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';
import { StudentDashbardComponent } from './student-dashbard/student-dashbard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectItemsModalComponent} from './grocery-store-modals/select-items-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from './service/api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstructorRecipeDashboardComponent } from './instructor-recipe-dashboard/instructor-recipe-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogForCreatingClassComponent } from './dialog-for-creating-class/dialog-for-creating-class.component';
import { MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { InstructorNewRecipeComponent } from './instructor-new-recipe/instructor-new-recipe.component';
import {MatButtonModule} from '@angular/material/button';
import { GroceryDialogContentDialogComponent } from './grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import { UtensilDialogContentDialogComponent } from './utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';
import {StudentRecipesComponent} from './student-recipes/student-recipes.component';
import { GlobalClassListComponent } from './global-class-list/global-class-list.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { FooterComponent } from './footer/footer.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { IngredientSelectorDirective } from './ingredient-selector.directive';
// import { NotifierModule } from 'angular-notifier';
import { RecipeshowdialogglobalComponent } from './recipeshowdialogglobal/recipeshowdialogglobal.component';





// @ts-ignore
const approutes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'stuDash', component: StuDashComponent},
  {path: 'instructor', component: InstructorComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'grocery', component: GroceryComponent},
  {path: 'studentDashboard', component: StudentDashbardComponent},
  {path: 'newRecipe', component: InstructorNewRecipeComponent},
  {path: 'modal', component: SelectItemsModalComponent},
  {path: 'instructorDashRecipe', component: InstructorRecipeDashboardComponent},
  {path: 'studentDashRecipe', component: StudentRecipesComponent},
  {path: 'globalClass', component: GlobalClassListComponent},
  {path: 'footerClass', component: FooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StuDashComponent,
    InstructorComponent,
    SignupComponent,
    GroceryComponent,
    StudentDashbardComponent,
    SelectItemsModalComponent,
    StudentRecipesComponent,
    SelectItemsModalComponent,
    InstructorRecipeDashboardComponent,
    DialogForCreatingClassComponent,
    InstructorNewRecipeComponent,
    GroceryDialogContentDialogComponent,
    UtensilDialogContentDialogComponent,
    GlobalClassListComponent,
    FooterComponent,
    SettingsPageComponent,
    IngredientSelectorDirective,
    RecipeshowdialogglobalComponent,

  ],
  imports: [
    BrowserModule,
    // Here, our routes are registered in angular app. and RouterModule gives us this functionality.
    RouterModule.forRoot(approutes),
    DragDropModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatDialogModule,
    MatBadgeModule,
    MatStepperModule,
    MatTooltipModule,
    // NotifierModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 0.1,
      backgroundPadding: -24,
      radius: 33,
      // @ts-ignore
      unitsFontWeight: 200,
      // @ts-ignore
      titleFontSize: 11,
      // @ts-ignore
      titleFontWeight: 300,
      imageHeight: 67,
      imageWidth: 30,
      animationDuration: 600
    }),
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogForCreatingClassComponent, GroceryDialogContentDialogComponent, UtensilDialogContentDialogComponent, RecipeshowdialogglobalComponent]
})
export class AppModule { }
