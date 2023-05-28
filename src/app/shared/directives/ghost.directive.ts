import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

type Rounding = 'none' | 'small' | 'large' | 'circle';

@Directive({
  selector: '[appGhost]',
})
export class GhostDirective implements OnChanges {
  @Input('appGhostWidth') width = '100%';
  @Input('appGhostHeight') height = '1rem';
  @Input('appGhostRounding') rounding: Rounding = 'small';

  cssClass = 'app-ghost';
  roundings: { [key: string]: string } = {
    none: '0',
    small: '0.5rem',
    large: '1rem',
    circle: '50%',
  };

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    const el = this.element.nativeElement;
    this.renderer.setStyle(el, 'width', this.width);
    this.renderer.setStyle(el, 'height', this.height);
    this.renderer.setStyle(el, 'border-radius', this.roundings[this.rounding]);
    this.renderer.addClass(el, this.cssClass);
  }
}
