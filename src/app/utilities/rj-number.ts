import { RjString } from '@utilities/rj-string';

export class RjNumber {

  // Taken from https://www.geeksforgeeks.org/prime-factor/
  static findPrimeFactors(num: number) {
    const primeFactors: number[] = [];

    while (num % 2 === 0) {
      primeFactors.push(num);
      num = num / 2;
    }

    for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
      while (num % i === 0) {
        primeFactors.push(i);
        num = num / i;
      }
    }

    if (num > 2) {
      primeFactors.push(num);
    }

    return primeFactors;
  }

  static findSubsets(arr: number[]) {
    const divisors: string[] = [];

    const power = arr.length;
    const max = Math.pow(2, power);
    for (let i = 0; i < max; i++) {
      const iStr = i.toString(2);
      divisors.push(RjString.fill(iStr, power));
    }
    return divisors;
  }

}
