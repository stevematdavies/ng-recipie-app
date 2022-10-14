import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe | null = null;
}
