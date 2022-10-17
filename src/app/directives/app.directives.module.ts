import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {AppHighlightDirective} from "./app.highlight.directive";
import { AppHighlightV2Directive } from './app-highlight-v2.directive';
import { AppUnlessDirective } from './app-unless.directive';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppHighlightDirective,
    AppHighlightV2Directive,
    AppUnlessDirective
  ],
  exports: [AppHighlightDirective, AppHighlightV2Directive,AppUnlessDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppDirectivesModule { }
