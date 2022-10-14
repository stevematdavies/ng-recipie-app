import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {Ingredient} from "../../../models/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  defaultImagePath: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bowl-whip.svg/512px-Bowl-whip.svg.png?20200325120803';
  @Output('recipeSelected') recipeSelectedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>()
  recipes: Array<Recipe> = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      this.defaultImagePath,
      [
        new Ingredient('Bread',1),
        new Ingredient('Soup',1)
    ]),

    new Recipe(
      'Another test Recipe',
      'Yum yum',
      this.defaultImagePath,
      [
        new Ingredient('Apples',10),
        new Ingredient('Oranges',5)
      ])
  ];

  onAddRecipe(){
    console.log('#adding recipe')
  }

  onRecipeSelected(r: Recipe){
   this.recipeSelectedEmitter.emit(r)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
