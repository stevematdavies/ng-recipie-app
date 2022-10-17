import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightV2]'
})
export class AppHighlightV2Directive {

  defaultBgColor: string = 'transparent';
  defaultFontColor: string = 'black'

  @Input() defaultHighlightFontColor: strgiting = 'white';
  @Input() defaultHighlightBgColor: string = '#5BFF00';

  @HostBinding('style.color') color: string = this.defaultFontColor
  @HostBinding('style.backgroundColor') bgColor: string = this.defaultBgColor

   @HostListener('mouseenter')
   onMouseEnter(e: Event){
     this.bgColor = this.defaultHighlightBgColor
     this.color = this.defaultHighlightFontColor
   }

  @HostListener('mouseleave')
  onMouseLeave(e: Event){
    this.bgColor = this.defaultBgColor
    this.color = this.defaultFontColor
  }


}
