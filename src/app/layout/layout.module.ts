import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RootComponent} from "./root/root.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ] ,
  exports: [
    RootComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
