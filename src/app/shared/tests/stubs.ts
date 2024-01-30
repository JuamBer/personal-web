import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({ name: 'translate' })
export class TranslatePipeStub implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

export class TranslateServiceStub {
  public get(key: string) {
    return of(key);
  }
}
