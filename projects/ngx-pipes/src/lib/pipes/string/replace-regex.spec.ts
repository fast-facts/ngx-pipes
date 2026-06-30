import { ReplaceRegexPipe } from './replace-regex';

describe('ReplaceRegexPipe Tests', () => {
  let pipe: ReplaceRegexPipe;

  beforeEach(() => {
    pipe = new ReplaceRegexPipe();
  });

  it('Should not do anything if not a string', () => {
    expect(pipe.transform(null, '')).toEqual(null);
    expect(pipe.transform(undefined, '')).toEqual(undefined);
    expect(pipe.transform(42, '')).toEqual(42);
    expect(pipe.transform({ name: 'foo' }, '')).toEqual({ name: 'foo' });
  });

  it('Should replace properly', () => {
    const result = pipe.transform('a-b-c', '-', ' ');
    expect(result).toEqual('a b c');
  });
});
