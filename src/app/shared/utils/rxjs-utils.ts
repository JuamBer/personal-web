import { BehaviorSubject, Observable } from 'rxjs';

export class RxJSUtils {
  public static observableToBehaviorSubject<T>(observable: Observable<T>, initValue: T): BehaviorSubject<T> {
    const subject = new BehaviorSubject(initValue);
    observable.subscribe(subject);
    return subject;
  }
}
