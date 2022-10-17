import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";
import * as uuid from 'uuid';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput')   nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output('onIngredientAdded') ingredientAddedEmitter: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  onAddItem(){
    this.ingredientAddedEmitter.emit(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
      uuid.v4()

    ))
    this.onClearForm()
  }

  onClearForm(){
    this.nameInputRef.nativeElement.value="";
    this.amountInputRef.nativeElement.value="";
  }

  ngOnInit(): void {
  }

}
