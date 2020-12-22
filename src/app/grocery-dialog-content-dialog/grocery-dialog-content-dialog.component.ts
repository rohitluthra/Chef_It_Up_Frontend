import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Ingredient, Teacher, Utensil} from '../models/app-models';
import {ApiService} from '../service/api.service';
import { Directive } from '@angular/core';
import {ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-grocery-dialog-content-dialog',
  templateUrl: './grocery-dialog-content-dialog.component.html',
  styleUrls: ['./grocery-dialog-content-dialog.component.css']
})
export class GroceryDialogContentDialogComponent implements OnInit {
  public ingredientSubscription: Subscription;
  public ingredientsSelected: Ingredient[] = [];
  public allIngredients: Ingredient[] = [];
  public selectedNumber = 0;
  value = '';
  showImage: number;
  isOpen: boolean;
  @ViewChild('itemcontainer', {static: false, read: ViewContainerRef }) entry: ViewContainerRef;
  hideseconddiv: boolean;


  constructor(private service: ApiService, private resolver: ComponentFactoryResolver) {

  }


  ngOnInit() {
    this.ingredientSubscription = this.service.$ingredients.subscribe((ingredients: Ingredient[]) => {
      this.allIngredients = ingredients;
    });
  }

  selectedIngre(ingredient: Ingredient) {
    this.selectedNumber++;
    this.ingredientsSelected.push(ingredient);

    this.allIngredients = this.allIngredients.filter(function(value, index, arr) {
      return value != ingredient;
    });

    this.service.setIngredients(this.ingredientsSelected);
  }

  updateNumbers() {
    window.sessionStorage.setItem('ingredientAmount', String(this.selectedNumber));
  }

  deleteSpecificIngredient(i) {

    const todel_1 = document.getElementById('ingredient' + i);

    const matinputval = document.getElementById('mat-input-' + (i + 2));
    console.log(i + 2, i);
    console.log(todel_1);
    console.log(matinputval);
    for ( let j = 0; j < this.ingredientsSelected.length; j++) {
      console.log(this.ingredientsSelected[j].name);
      console.log(matinputval.attributes.getNamedItem('ng-reflect-value').value);

      if ( this.ingredientsSelected[j].name === matinputval.attributes.getNamedItem('ng-reflect-value').value) {
        this.ingredientsSelected.splice(j, 1);
      }
    }
    console.log(this.ingredientsSelected);
    todel_1.remove();

  }
}
