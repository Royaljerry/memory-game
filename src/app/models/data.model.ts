export interface Data {
  title: string;
  numberOfGroups: number;
  layoutRatios: {
    portrait: number[];
    landscape: number[];
  };
}
