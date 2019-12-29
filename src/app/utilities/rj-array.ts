export class RjArray {

  static fillArray(arrayLength: number) {
    return(new Array(arrayLength).fill(0, 0, arrayLength).map((x, i) => i));
  }

  static permutateArray(originalArray: any[]) {
    const permutatedArray = [];
    while (originalArray.length > 0) {
      const index = Math.floor((originalArray.length) * Math.random());
      const item = originalArray[index];
      permutatedArray.push(item);
      originalArray.splice(index, 1);
    }
    return (permutatedArray);
  }

}
