import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsPipe } from './errors.pipe';

describe('ErrorsPipe', () => {
  let pipe: ErrorsPipe;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TranslateService, useValue: { instant: () => 'Error message' } }],
    });
    translateService = TestBed.inject(TranslateService);
    pipe = new ErrorsPipe(translateService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return observable with empty string if control is null or undefined', (done) => {
    pipe.transform(null).subscribe((result) => {
      expect(result).toBe('');
      done();
    });
  });

  it('should return observable with error message if control has error and is dirty', (done) => {
    const control = new FormControl('', Validators.required);
    control.markAsDirty();
    control.setErrors({ required: true });
    pipe.transform(control).subscribe((result) => {
      expect(result).toBe('Error message');
      done();
    });
  });
});
