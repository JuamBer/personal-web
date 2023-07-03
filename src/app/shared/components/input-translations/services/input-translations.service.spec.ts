import { TestBed } from '@angular/core/testing';

import { InputTranslationsService } from './input-translations.service';

describe('InputTranslationsService', () => {
  let service: InputTranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputTranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
