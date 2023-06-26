import { TestBed } from '@angular/core/testing';

import { TranslateInputService } from './translate-input.service';

describe('TranslateInputService', () => {
  let service: TranslateInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
