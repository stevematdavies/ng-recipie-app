import {NgModule} from "@angular/core";
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {RecipeListItemComponent} from "./recipe/recipe-list-item/recipe-list-item.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping/shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./shopping/shopping-list-edit/shopping-list-edit.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { RecipesComponent } from './recipe/recipes/recipes.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ] ,
  exports: [
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
