import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.counting',
  host: {
    '(click)': 'onClick()',
  }
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef) { }

  public numberOfClicks = 0;

  onClick(btn) {
  	console.log("ell", this.el.nativeElement.style.backgroundColor = "gray");
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }

}
