import { RjNumber } from './rj-number';

describe('RjNumbers', () => {
  it('should create an instance', () => {
    expect(new RjNumber()).toBeTruthy();
  });

  it('should find divisors of a number', () => {
    const testNumber = 10;

    const divisors = RjNumber.findDivisors(testNumber);

    expect(divisors).toEqual([1, 2, 5, 10]);
  });
});
