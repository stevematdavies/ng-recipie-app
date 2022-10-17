import { Component } from '@angular/core';
import {View} from "./models/tyypes";
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentView: View = "RECIPES";

  constructor(private logger: LoggingService) {
  }

  onViewSwitched(v: View){
    this.logger.log.D('Switching view')
    this.currentView = v
  }
}
