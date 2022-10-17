import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective {

  @Input() set appUnless(cond: boolean){
     if(!cond){
        this.vcRef.createEmbeddedView(this.tmpRef);
     } else {
         this.vcRef.clear();
     }
  }

  constructor(private tmpRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
