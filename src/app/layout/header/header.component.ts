import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {View} from "../../models/tyypes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('onViewSwitched') viewSwitchEmitter: EventEmitter<View> = new EventEmitter<View>()
  constructor() { }

  onNavSelected(view: View){
    this.viewSwitchEmitter.emit(view);
  }

  ngOnInit(): void {
  }




}
