import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';
import {Student, Teacher} from '../models/app-models';

@NgModule({
  providers: [
    ApiService,
  ]})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  public email;
  public password;
  public fullName;

  public teacher;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
  }

  setAsTeacher() {
    this.user = 'teacher';
  }
  setAsStudent() {
    this.user = 'student';
  }

  teacherLogin(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    let Data: boolean = false;

    this.service.teacherLogin(email, password).subscribe((data: Teacher) => {
      if(data.name != null) {
        Data = true;
        this.teacher = data;
        console.log(this.teacher);
        window.localStorage.setItem('user', JSON.stringify(this.teacher));
      }
        if(Data==false) {
          confirm("Email and Password combination is wrong. Try Again.")
        }
        else
          this.router.navigateByUrl("/instructor")
      });
  }


  studentLogin(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#stemail').value;
    const password = target.querySelector('#stpassword').value;
    let Data: boolean = false;

    this.service.studentLogin(email, password).subscribe((data: Student) => {
      console.log(data);
      if(data.name!=null) {
        Data = true;
      }
      if(Data==false) {
        confirm("Email and Password combination is wrong. Try Again.")
      }
      else {
        this.router.navigateByUrl("/stuDash")
      }
    });

  }

}
