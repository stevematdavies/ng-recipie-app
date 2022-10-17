import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";

import * as uuid from 'uuid';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5, uuid.v4()),
    new Ingredient('Tomatoes', 10, uuid.v4())
  ];


  onIngredientAdded(i: Ingredient){
    this.ingredients = [...this.ingredients, i];
    this.ingredients.sort();
  }

  onIngredientRemove(iid: string){
    this.ingredients = this.ingredients.filter((ing:Ingredient) => {
      return ing.id !== iid;
    }).sort()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
