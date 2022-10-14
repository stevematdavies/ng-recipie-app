import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  defaultImagePath: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bowl-whip.svg/512px-Bowl-whip.svg.png?20200325120803';

  recipes: Array<Recipe> = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      this.defaultImagePath),

    new Recipe(
      'Another test Recipe',
      'Yum yum',
      this.defaultImagePath)
  ];

  onAddRecipe(){
    console.log('#adding recipe')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
