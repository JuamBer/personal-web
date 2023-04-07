import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Directive({
  selector: '[skeleton]',
})
export class SkeletonDirective {
  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonWidth') width!: string;
  @Input('skeletonHeight') height!: string;
  @Input('skeletonClassName')
  className!: string;

  constructor(
    private elr: ElementRef,
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();
      if (changes['isLoading'].currentValue) {
        const ref = this.vcr.createComponent(
          this.componentFactoryResolver.resolveComponentFactory(Skeleton),
        );
        Object.assign(ref.instance, {
          width: this.width ? this.width : '100%',
          height: this.height ? this.height : '3rem',
          className: this.className,
        });
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }
}
