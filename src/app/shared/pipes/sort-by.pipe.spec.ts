/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  let pipe: SortByPipe<unknown>;

  beforeEach(() => {
    pipe = new SortByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort array in ascending order by key', () => {
    const items = [{ key: 2 }, { key: 1 }, { key: 3 }];
    const result = pipe.transform(items, 'key', 'asc');
    expect(result).toEqual([{ key: 1 }, { key: 2 }, { key: 3 }]);
  });

  it('should sort array in descending order by key', () => {
    const items = [{ key: 2 }, { key: 1 }, { key: 3 }];
    const result = pipe.transform(items, 'key', 'desc');
    expect(result).toEqual([{ key: 3 }, { key: 2 }, { key: 1 }]);
  });

  it('should return items if key is null', () => {
    const items = [{ key: 2 }, { key: 1 }, { key: 3 }];
    const result = pipe.transform(items, null as any);
    expect(result).toEqual(items);
  });

  it('should return items if key is undefined', () => {
    const items = [{ key: 2 }, { key: 1 }, { key: 3 }];
    const result = pipe.transform(items, undefined as any);
    expect(result).toEqual(items);
  });

  it('should return items if items is null', () => {
    const result = pipe.transform(null as any, 'key');
    expect(result).toBeNull();
  });

  it('should return items if items is undefined', () => {
    const result = pipe.transform(undefined as any, 'key');
    expect(result).toBeUndefined();
  });
});
