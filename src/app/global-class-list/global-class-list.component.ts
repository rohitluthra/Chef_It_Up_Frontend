import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';
import {ApiService} from '../service/api.service';
import {Router} from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material';
import {RecipeshowdialogglobalComponent} from '../recipeshowdialogglobal/recipeshowdialogglobal.component';


@Component({
  selector: 'app-global-class-list',
  templateUrl: './global-class-list.component.html',
  styleUrls: ['./global-class-list.component.css']
})
export class GlobalClassListComponent implements OnInit {
  isOpen: boolean;

   classesList: Class[];
  private alreadySubscribed: number;

  constructor(private service: ApiService, private router: Router, public dialog: MatDialog) {
    if (this.classesList == null && window.sessionStorage.getItem('allClasses') != null) {
      this.classesList = JSON.parse(window.sessionStorage.getItem('allClasses'));
    }
  }

  ngOnInit() {
  }
  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  subscribeHandler(classe: Class, event) {
    const student: Student = JSON.parse(window.sessionStorage.getItem('student'));
    if (!classe.students.includes(student.username)) {
      classe.students.push(student.username);
      this.service.updateStudentsinClass(classe).subscribe( (data: String) => {
        console.log(data);
      });
      // @ts-ignore
      window.sessionStorage.setItem('selectedNewClass', classe);
      this.router.navigateByUrl('/stuDash');
    }
    event.preventDefault();
    const target = event.target;
    target.className = ' bg-red-800 hover:bg-red-700 inline uppercase mx-auto shadow transition-all transition-ease-out focus:shadow-outline focus:outline-none text-white text-xs py-1 px-6 rounded';
    target.disabled;
    target.textContent = 'Already Subscribed';
    target.disable;

  }
  openRecipeDetailsDialog() {
    const dialogRef = this.dialog.open(RecipeshowdialogglobalComponent, {maxWidth: '800px', maxHeight: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

