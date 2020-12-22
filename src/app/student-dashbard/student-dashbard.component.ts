import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../models/app-models';

@Component({
  selector: 'app-student-dashbard',
  templateUrl: './student-dashbard.component.html',
  styleUrls: ['./student-dashbard.component.css']
})
export class StudentDashbardComponent implements OnInit {
  public recipe: Recipe;

  constructor() {
    if (window.sessionStorage.getItem('recipeSelected') != null) {
      console.log("in Student local storage");
      this.recipe = JSON.parse(window.sessionStorage.getItem('recipeSelected'));
    }
  }
  isOpen: boolean;
  panelOpenState = false;
  length = 10;


  fruits = [
    ''
  ];

  workspaceItems = ['temp']
  ;

  utensils = [
    ''
  ];

  ngOnInit() {
    if (this.recipe == null && window.localStorage.getItem('recipeSelected') != null) {
      console.log("in Student local storage");
      this.recipe = JSON.parse(window.localStorage.getItem('recipeSelected'));
    }
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
