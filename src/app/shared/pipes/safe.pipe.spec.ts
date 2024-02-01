import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let pipe: SafePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer],
    });
    pipe = new SafePipe(TestBed.inject(DomSanitizer));
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
