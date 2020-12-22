import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  user = '';
  case = '';
  grocery: boolean;
  utensil: boolean;
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  setAsTeacher() {
    this.user = 'teacher';
  }
  setAsStudent() {
    this.user = 'student';
  }

  setAsGrocery() {
    this.case = 'grocery';
  }
  showutensil() {
    this.utensil = !this.utensil;  }

  showGrocery() {
    this.grocery = !this.grocery;
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }


}
