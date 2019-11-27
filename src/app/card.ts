export class Card {
  cardId: number;
  groupId: number;
  turned: boolean;

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
