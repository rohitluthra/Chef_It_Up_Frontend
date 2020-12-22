import { Component, OnInit } from '@angular/core';
import {Class, Recipe, Student, Utensil} from '../models/app-models';
import {MatDialog} from '@angular/material';
import {GlobalClassListComponent} from '../global-class-list/global-class-list.component';
import {Router} from '@angular/router';


@Component({
  selector: 'student-recipes',
  templateUrl: './student-recipes.component.html',
})
export class StudentRecipesComponent implements OnInit{
  isOpen: boolean;
   student: Student;
   clas: Class;
   displayingRecipeList: Recipe[] = [];

  constructor(private dialog: MatDialog, private router: Router) {
    if(this.student==null && window.localStorage.getItem('student') != null) {
      console.log("in Student local storage");
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    if (this.clas == null && window.localStorage.getItem('selectedClass') != null) {
      console.log("in Student local storage");
      this.clas = JSON.parse(window.localStorage.getItem('selectedClass'));
    }
    console.log(this.displayingRecipeList, this.clas.recipes)
    this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.clas.recipes);
  }


  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  openDialogue() {
    const dialogRef = this.dialog.open(GlobalClassListComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  searchBarRecipe(event) {

    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarRecipeText').value);
    const searchText = target.querySelector('#searchBarRecipeText').value;

    if (searchText == '') {

      this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.clas.recipes);
      // this.displayingClassList = this.teacher.classList.splice(0);
    } else {
      while (this.displayingRecipeList.length > 0) {
        this.displayingRecipeList.pop();
      }

      for (let i = 0; i < this.clas.recipes.length; i++) {
        const name = this.clas.recipes[i].name;
        if (searchText == name) {
          console.log('is present');
          this.displayingRecipeList.push(this.clas.recipes[i]);
        }
      }
    }
  }

  deleteRecipe(deleteRecipe: Recipe) {
    let i = 0;
    while (i < this.clas.recipes.length) {
      let index;
      if (deleteRecipe == this.clas.recipes[i]) {
        index = this.clas.recipes.lastIndexOf(deleteRecipe);
        break;
      }
      i++;
    }

    const r = this.clas.recipes.splice(i, 1);
    this.displayingRecipeList.splice(i, 1);
    console.log('Recipe Deleted: ', r);
  }

  cookRecipe(rec: Recipe) {
    let ut1 = new Utensil();
    ut1.name = "Fry pan";
    let ut2 = new Utensil();
    ut2.name = "PANNY PAN";
    rec.utensils.push(ut1, ut2);
    let step = new String[2];
    step[0] = "Step 1"; step[1] = "Step 2"
    rec.steps.push(step);
    // rec.steps.push("Step 1");
    // rec.steps.push("Step 2");

    window.sessionStorage.setItem('recipeSelected', JSON.stringify(rec));
    console.log(JSON.parse(window.sessionStorage.getItem('recipeSelected')));
    this.router.navigateByUrl("/studentDashboard");
  }
}
