import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {iterator} from "rxjs/internal/symbol/iterator";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe | null = null;
  @Output('recipeSelected') recipeSelectedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>()

  onRecipeItemSelected(r: Recipe){
    this.recipeSelectedEmitter.emit(r)
  }
}
