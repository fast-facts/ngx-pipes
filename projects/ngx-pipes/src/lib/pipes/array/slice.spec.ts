import { SlicePipe } from './slice';

describe('SlicePipe', () => {
  let pipe: SlicePipe;

  beforeEach(() => {
    pipe = new SlicePipe();
  });

  it('should return value if not array', () => {
    expect(pipe.transform(42)).toEqual(42);
    expect(pipe.transform(false)).toEqual(false);
  });

  it('should check that nothing happens if there are no parameters', () => {
    const arr = [1, 2, 3];
    const result = pipe.transform(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should slice properly', () => {
    expect(pipe.transform([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(pipe.transform([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    expect(pipe.transform([1, 2, 3, 4], 0, 1)).toEqual([1]);
    expect(pipe.transform([1, 2, 3, 4], 0, 3)).toEqual([1, 2, 3]);
  });

  it('should slice properly array of objects', () => {
    const fooObj = { id: 1, name: 'foo' };
    const barObj = { id: 2, name: 'bar' };
    const cazObj = { id: 3, name: 'caz' };

    expect(pipe.transform([fooObj, barObj, cazObj], 1)).toEqual([barObj, cazObj]);
  });
});
