export class Card {
  constructor(
    public cardId: number,
    public groupId: number,
    public imagePath: string,
    public turned: boolean,
    public found: boolean
  ) {}
}
