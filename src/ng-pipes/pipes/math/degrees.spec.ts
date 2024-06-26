import { DegreesPipe } from './degrees';

describe('DegreesPipe', () => {
  let pipe: DegreesPipe;

  beforeEach(() => {
    pipe = new DegreesPipe();
  });

  it('should return degrees of given number in radians', () => {
    expect(pipe.transform(null as number)).toEqual(NaN);
    expect(pipe.transform(undefined as number)).toEqual(NaN);
    expect(pipe.transform(1.5707963267948966)).toEqual(90);
    expect(pipe.transform(3.141592653589793)).toEqual(180);
  });
});
