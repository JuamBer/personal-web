import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventType',
})
export class EventTypePipe implements PipeTransform {
  transform(event: EventTarget): HTMLInputElement {
    return event as HTMLInputElement;
  }
}
