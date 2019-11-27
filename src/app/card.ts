export class Card {
  private cardId: number;
  private groupId: number;
  private turned: boolean;

  constructor(
    cardId: number,
    groupId: number,
    turned: boolean
  ) {
    this.cardId = cardId;
    this.groupId = groupId;
    this.turned = turned;
  }
}
