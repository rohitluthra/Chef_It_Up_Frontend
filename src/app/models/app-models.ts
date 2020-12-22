export class Teacher {
  username: string;
  password: string;
  name: string;
  classList: Class[];
  type: string;
  draftRecipes: Recipe[];
  specialRecipes: Recipe[];
}

export class Student {
  username: string;
  password: string;
  name: string;
  classList: Class[];
  type: String;
  cookedRecipes: Recipe[];
}

export class Class {
  name: string;
  instructor: string;
  description: string;
  recipes: Recipe[];
  students: String[];
}

export class Step {
  description: string;
  ingredient: Ingredient;
  utensils: Utensil;
  action: string
}

export class Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  utensils: Utensil[];
  steps: Step[];
  students: Student[];
}

export class Utensil {
  name: string;
  imagePath: string;
  volume: string;
  properties: string[];
  description: string;
}

export class Ingredient {
  name: string;
  imagePath: string;
  type: string;
  state: string;
  description: string;
}
