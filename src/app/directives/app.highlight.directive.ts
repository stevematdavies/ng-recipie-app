import {Directive, ElementRef, OnInit} from "@angular/core";


@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit{

  constructor(private eRef: ElementRef) {
  }

  ngOnInit():void {
    this.eRef.nativeElement.style.backgroundColor =  'green';
    this.eRef.nativeElement.style.padding =  '1em';
    this.eRef.nativeElement.style.color =  'white';
  }

}
