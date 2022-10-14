import { Component } from '@angular/core';
import {View} from "./models/tyypes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentView: View = "RECIPES";

  onViewSwitched(v: View){
    this.currentView = v
  }
}
