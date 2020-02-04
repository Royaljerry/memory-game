import { RjArray } from './rj-array';

describe('RjArray', () => {
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

    const arraysHaveSameLength = testArrayPermutated.length === testArray.length;
    const arraysHaveSameItems = testArray.every((item, index) => item === testArrayPermutatedSorted[index]);
    expect(arraysHaveSameLength && arraysHaveSameItems).toBeTruthy();
  });
});
