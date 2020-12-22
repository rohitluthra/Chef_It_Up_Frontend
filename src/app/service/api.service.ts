import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {Class, Ingredient, Recipe, Student, Teacher, Utensil} from '../models/app-models';
import {toSubscriber} from 'rxjs/internal-compatibility';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  public teacher: Teacher = null;
  public $teacher = new Subject<Teacher>();

  public $ingredients = new Subject<Ingredient[]>();
  public $utensils = new Subject<Utensil[]>();

  public selectedClass : Class;
  public selectedUtensils: Utensil[];
  public selectedIngredients: Ingredient[];
  public selectedRecipe: Recipe = null;


  constructor(private http: HttpClient) {
  }

  // teacherURL: string = 'https://chefitup-backend.herokuapp.com/rest/Teacher/';
  // studentURL: string = 'https://chefitup-backend.herokuapp.com/rest/Student/';
  // ingredientURL: string = 'https://chefitup-backend.herokuapp.com/rest/Ingredient/';
  // utensilURL: string = 'https://chefitup-backend.herokuapp.com/rest/Utensil/';
  // recipeURL: string = 'https://chefitup-backend.herokuapp.com/rest/Recipe/';

  teacherURL: string = 'http://localhost:8080/rest/Teacher/';
  studentURL: string = 'http://localhost:8080/rest/Student/';
  ingredientURL: string = 'http://localhost:8080/rest/Ingredient/';
  utensilURL: string = 'http://localhost:8080/rest/Utensil/';
  recipeURL: string = 'http://localhost:8080/rest/Recipe/';
  classURL: string = 'http://localhost:8080/rest/Class/';

  teacherLogin(email, password) {
    // @ts-ignore
    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + email + "&password=" + password);
  }

  setTeacher(teacher: Teacher) {
    this.postTeacher(teacher).subscribe((data: string) => {
      console.log(data);
    });
    window.localStorage.setItem('user', JSON.stringify(teacher));
    // @ts-ignore
    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + teacher.username + "&password=" + teacher.password);

  }

  postTeacher(teacher: Teacher) {
    return this.http.post(this.teacherURL + "updateTeacher", JSON.stringify(teacher));
  }

  teacherSignUp(fullname, email, password){
    return this.http.post(this.teacherURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Teacher});
  }

  studentLogin(email, password) {
    return this.http.get(this.studentURL + "login?username=" + email + "&password=" + password);
  }

  studentSignUp(fullname, email, password){
    return this.http.post(this.studentURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Student});
  }

  addNewClass(clase: Class) {
    return this.http.post(this.teacherURL + "addNewClass", JSON.stringify(clase))
  }

  getUtensils() {
    // @ts-ignore
    this.$utensils = this.http.get(this.utensilURL + "utensils");
  }

  getIngredients() {
    // @ts-ignore
    this.$ingredients = this.http.get(this.ingredientURL + "ingredients");
  }

  setClass(clas: Class) {
    console.log("In API service.ts");
    window.sessionStorage.setItem('selectedClass', JSON.stringify(clas));
    this.selectedClass = clas;
  }

  getClass() : Class {
    return this.selectedClass;
  }

  setUtensils(utensils: Utensil[]) {
    window.sessionStorage.setItem('selectedUtensils', JSON.stringify(utensils));
    this.selectedUtensils = utensils;
  }

  getSelectedUtensils() : Utensil[] {
    return this.selectedUtensils;
  }

  setIngredients(ingredients: Ingredient[]) {
    window.localStorage.setItem('selectedIngredients', JSON.stringify(ingredients));
    this.selectedIngredients = ingredients;
  }

  getSelectedIngredients() : Ingredient[] {
    return this.selectedIngredients;
  }

  addNewRecipe(recipe: Recipe) {
    console.log(recipe);
    return this.http.post(this.recipeURL + "addNewRecipe", JSON.stringify(recipe));
  }

  getClassesForTeacher(username): Observable<Class[]> {
    console.log("get classses for teacher");
    // @ts-ignore
    return this.http.get(this.classURL  + "classesForTeacher?teacher="+ username);
  }

  getSelectedRecipe() : Recipe{
    return this.selectedRecipe;
  }

  setSelectedRecipe(selectedRec: Recipe){
    window.localStorage.setItem('selectedRecipe', JSON.stringify(selectedRec));
    this.selectedRecipe = selectedRec;
  }

  findAllClasses() {
    return this.http.get(this.classURL+ 'allClasses')
  }

  getClassesForStudent(username): Observable<Class[]> {
    console.log("get classses for student");
    // @ts-ignore
    return this.http.get(this.studentURL  + "studentClasses?student="+ username);
  }

  updateStudentsinClass(classe: Class) {
    console.log(classe);
    return this.http.post(this.classURL + "updateClass", JSON.stringify(classe));
  }
}
