import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {AppHighlightDirective} from "./app.highlight.directive";
import { AppHighlightV2Directive } from './app-highlight-v2.directive';

@NgModule({
  declarations: [
    AppHighlightDirective,
    AppHighlightV2Directive
  ],
  exports: [AppHighlightDirective,AppHighlightV2Directive],
  imports: [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppDirectivesModule { }
