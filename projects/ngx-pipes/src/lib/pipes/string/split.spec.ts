import { SplitPipe } from './split';

describe('SplitPipe Tests', () => {
  let pipe: SplitPipe;

  beforeEach(() => {
    pipe = new SplitPipe();
  });

  it('Should split string with no seperator', () => {
    const result = pipe.transform('foo');
    expect(result).toEqual(['f', 'o', 'o']);
  });

  it('Should split string with separator', () => {
    const result = pipe.transform('foo foo', ' ');
    expect(result).toEqual(['foo', 'foo']);
  });
});
