import { Component, OnInit } from '@angular/core';
import {Class} from '../models/app-models';


@Component({
  selector: 'app-recipeshowdialogglobal',
  templateUrl: './recipeshowdialogglobal.component.html',
  styleUrls: ['./recipeshowdialogglobal.component.css']
})
export class RecipeshowdialogglobalComponent implements OnInit {

  constructor() {
    console.log(window.sessionStorage.getItem('selectedNewClass'));
  }

  ngOnInit() {
  }

}
