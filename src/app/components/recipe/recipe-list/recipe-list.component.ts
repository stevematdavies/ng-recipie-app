import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe(
      'A Test Recipe',
      'this is a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/08/Apricot-Tart-28.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
