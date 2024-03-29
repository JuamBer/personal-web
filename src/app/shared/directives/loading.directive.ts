import {
  AfterViewInit,
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements AfterViewInit {
  private elementRef = inject(ElementRef<HTMLDivElement>);
  private injector = inject(Injector);
  private ref = inject(ChangeDetectorRef);

  isLoading$ = new BehaviorSubject<boolean>(false);

  @Input() set appIsLoading(loading: boolean) {
    this.isLoading$.next(loading);
  }

  fontSizeValue: number = 12;
  viewContainerRef = this.injector.get(ViewContainerRef);
  skeletonComponentRef: ComponentRef<Skeleton> | undefined;

  ngAfterViewInit(): void {
    this.isLoading$.subscribe((isLoading) => {
      this.handleLoading(isLoading);
      this.ref.detectChanges();
    });
  }

  handleLoading(isLoading: boolean) {
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
