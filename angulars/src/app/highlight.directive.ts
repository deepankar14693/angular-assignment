import {Directive, ElementRef, AfterViewInit, Input, OnChanges, HostListener} from '@angular/core';
import {NgOnChangesFeature} from '@angular/core/src/render3';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {
  @Input('appHighlight') color: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') enter() {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') leave() {
    this.el.nativeElement.style.color = null;
  }
}
  // ngOnChanges() {
  //   this.el.nativeElement.style.color = this.color;
  // }
  //
  // ngAfterViewInit() {
  //   this.el.nativeElement.style.color = this.color;
// }

