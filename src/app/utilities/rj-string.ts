export class RjString {

  static fill(str: string, stretch: number, char: string = '0') {
    const strLength = str.length;
    const remainderChars = stretch - strLength;
    const fillChars = char.repeat(remainderChars);
    return fillChars + str;
  }

}
