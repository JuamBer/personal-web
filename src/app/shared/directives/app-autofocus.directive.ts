import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AppAutoFocusDirective implements AfterViewInit {
  private elementRef = inject(ElementRef<HTMLElement>);

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
}
