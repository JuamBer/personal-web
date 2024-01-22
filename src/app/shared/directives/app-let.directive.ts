import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  $implicit?: T;
  appLet?: T | null;
}

// <div *appLet="'nativeName' as field">{{ field }}</div>

@Directive({
  selector: '[appLet]',
})
export class LetDirective<T> {
  private _context: LetContext<T> = {};

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<LetContext<T>>,
  ) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }

  @Input()
  set appLet(value: T) {
    this._context.appLet = value;
    this._context.$implicit = this._context.appLet = value;
    this.updateView();
  }

  updateView() {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef, this._context);
  }
}
