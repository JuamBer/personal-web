import {
  AfterViewInit,
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements AfterViewInit {
  isLoading$ = new BehaviorSubject<boolean>(false);

  @Input() set appIsLoading(loading: boolean) {
    this.isLoading$.next(loading);
  }

  fontSizeValue: number = 12;
  viewContainerRef = this.injector.get(ViewContainerRef);
  skeletonComponentRef: ComponentRef<Skeleton> | undefined;

  constructor(
    private elementRef: ElementRef<HTMLDivElement>,
    private injector: Injector,
    private ref: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.ref.detectChanges();
    this.fontSizeValue = parseFloat(window.getComputedStyle(this.elementRef.nativeElement).fontSize) / 2;

    this.isLoading$.subscribe((isLoading) => {
      this.handleLoading(isLoading);
    });
  }

  handleLoading(isLoading) {
    if (isLoading) {
      this.skeletonComponentRef = this.viewContainerRef.createComponent<Skeleton>(Skeleton);
      this.skeletonComponentRef.instance.height = `${
        this.elementRef.nativeElement.offsetHeight - this.fontSizeValue * 2
      }px`;
      this.skeletonComponentRef.instance.width = `${
        this.elementRef.nativeElement.offsetWidth - this.fontSizeValue * 2
      }px`;
      this.skeletonComponentRef.instance.style = { margin: `${this.fontSizeValue}px` };
      this.elementRef.nativeElement.style.display = 'none';
    } else {
      this.elementRef.nativeElement.style.display = 'inline';
      if (this.skeletonComponentRef) {
        this.skeletonComponentRef.destroy();
      }
    }
  }
}
