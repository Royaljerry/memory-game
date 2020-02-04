export class RjArray {

  static fillArray(arrayLength: number) {
    return(new Array(arrayLength).fill(0, 0, arrayLength).map((x, i) => i));
  }

  static permutateArray(originalArray: any[]) {
    const workArray = [...originalArray];
    const permutatedArray = [];
    while (workArray.length > 0) {
      const index = Math.floor((workArray.length) * Math.random());
      const item = workArray[index];
      permutatedArray.push(item);
      workArray.splice(index, 1);
    }
    return permutatedArray;
  }

}
