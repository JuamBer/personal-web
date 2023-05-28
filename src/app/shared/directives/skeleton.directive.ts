import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective implements OnChanges {
  @Input() skeleton = false;
  @Input() size = 1;
  @Input() width!: string;
  @Input() height!: string;
  @Input() className!: string;

  constructor(
    private elr: ElementRef,
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['skeleton']) {
      this.vcr.clear();
      if (changes['skeleton'].currentValue) {
        const ref = this.vcr.createComponent(this.componentFactoryResolver.resolveComponentFactory(Skeleton));
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
