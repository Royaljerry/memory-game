import { RjArray } from './rj-array';

describe('Array', () => {
  it('should create an instance', () => {
    expect(new RjArray()).toBeTruthy();
  });

  it('should fill an array with ordinals', () => {
    expect(RjArray.fillArray(5)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should permutate an array', () => {
    const testArray = [0, 1, 2, 3, 4];

    const testArrayPermutated = RjArray.permutateArray(testArray);
    const testArrayPermutatedSorted = [...testArrayPermutated].sort((a, b) => a - b);
    const sameItems = (array1, array2) => array1.reduce(() => {})
    console.log(testArrayPermutated, testArrayPermutatedSorted);


    expect(testArrayPermutated.length).toEqual(testArray.length);

  });
});
