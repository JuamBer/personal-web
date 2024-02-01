import { FormControl, Validators } from '@angular/forms';
import { IsRequiredPipe } from './is-required.pipe';

describe('IsRequiredPipe', () => {
  let pipe: IsRequiredPipe;

  beforeEach(() => {
    pipe = new IsRequiredPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if control is null or undefined', () => {
    const result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('should return "*" if control has required validator and no error or not dirty', () => {
    const control = new FormControl('', Validators.required);
    const result = pipe.transform(control);
    expect(result).toBe('*');
  });

  it('should return empty string if control has required validator and has error or is dirty', () => {
    const control = new FormControl('', Validators.required);
    control.markAsDirty();
    control.setErrors({ required: true });
    const result = pipe.transform(control);
    expect(result).toBe('');
  });
});
