import { RjString } from '@utilities/rj-string';

export class RjNumber {

  // Based on https://www.geeksforgeeks.org/prime-factor/
  static findPrimeFactors(num: number) {
    const primes: number[] = [];
    const factors = [];

    while (num % 2 === 0) {
      primes.push(num);
      num = num / 2;
    }

    for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
      while (num % i === 0) {
        primes.push(i);
        num = num / i;
      }
    }

    if (num > 2) {
      primes.push(num);
    }

    const uniquePrimes = new Set(primes);

    for (const prime of uniquePrimes) {
      factors.push([prime, primes.filter(p => p === prime).length]);
    }

    return factors;
  }

  static findDivisors(arr: number[]) {
    const divisorMarkers: string[] = [];
    const divisors: number[] = [];
    // const activeDivisors: number[][] = [];

    const power = arr.length;
    const max = Math.pow(2, power);
    for (let i = 0; i < max; i++) {
      const iStr = i.toString(2);
      divisorMarkers.push(RjString.fill(iStr, power));
    }
    for (const [indexMarker, marker] of divisorMarkers.entries()) {
      if (marker) {
        for (const [indexDigit, digit] of marker.split('').entries()) {
          if (digit === '1') {
            // activeDivisors.push(digit);
          }
        }
      }
    }
    return divisorMarkers;
  }

}
