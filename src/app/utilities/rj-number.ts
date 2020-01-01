import { RjString } from '@utilities/rj-string';

export class RjNumber {

  // Based on https://rosettacode.org/wiki/Proper_divisors#ES6
  static findDivisors(num: number) {
    const enumFromTo = m => n => Array.from({length: 1 + n - m}, (_, i) => m + i);
    const root = Math.floor(Math.sqrt(num));
    const lows = enumFromTo(1)(root).filter(x => 0 === (num % x));
    return Array.from(new Set(lows.concat(lows.map(x => num / x).reverse())));
  }

}
