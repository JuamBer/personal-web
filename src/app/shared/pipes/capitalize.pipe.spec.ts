/* eslint-disable @typescript-eslint/no-explicit-any */
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of a string', () => {
    const result = pipe.transform('angular');
    expect(result).toBe('Angular');
  });

  it('should return an empty string if input is null', () => {
    const result = pipe.transform(null as any);
    expect(result).toBe('');
  });

  it('should return an empty string if input is undefined', () => {
    const result = pipe.transform(undefined as any);
    expect(result).toBe('');
  });

  it('should return an empty string if input is an empty string', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });
});
