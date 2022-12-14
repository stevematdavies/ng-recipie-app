import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ComponentsModule} from "./components/components.module";
import {LayoutModule} from "./layout/layout.module";
import {AppDirectivesModule} from "./directives/app.directives.module";
import {LoggingService} from "./services/logging.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    ComponentsModule,
    BrowserModule,
    AppDirectivesModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
