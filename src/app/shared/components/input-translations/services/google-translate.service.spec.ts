import { TestBed } from '@angular/core/testing';

import { GoogleTranslateService } from './google-translate.service';

describe('GoogleTranslateService', () => {
  let service: GoogleTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
