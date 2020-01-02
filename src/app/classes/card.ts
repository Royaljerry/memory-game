export class Card {
  constructor(
    public cardId: number,
    public groupId: number,
    public turned: boolean,
    public found: boolean
  ) {}
}
