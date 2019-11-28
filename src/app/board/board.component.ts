import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() numberOfGroups: number;
  numberOfCards: number;
  orderArray = [];
  orderOfCards: number[];
  groupArray = [];
  orderOfGroups: number[];
  allCards: Card[];
  turnedCards: Card[] = [];

  constructor() { }

  fillArray(arrayLength: number) {
    return(new Array(arrayLength).fill(0, 0, arrayLength).map((x, i) => i));
  }

  permutateArray(originalArray: any[]) {
    const permutatedArray = [];
    while (originalArray.length > 0) {
      const index = Math.floor((originalArray.length) * Math.random());
      const item = originalArray[index];
      permutatedArray.push(item);
      originalArray.splice(index, 1);
    }
    return (permutatedArray);
  }

  generateCards(orderOfCards: number[], orderOfGroups: number[]) {
    const cards: Card[] = [];
    for (let i = 0; i < orderOfGroups.length; i++) {
      const card1 = new Card(orderOfCards[2 * i], orderOfGroups[i], false, false);
      const card2 = new Card(orderOfCards[(2 * i) + 1], orderOfGroups[i], false, false);
      cards.push(card1);
      cards.push(card2);
    }
    return cards;
  }

  resetCards(currentCard: Card) {
    for (const card of this.allCards) {
      if (card !== currentCard) {
        card.turned = false;
      }
    }
    this.turnedCards = [currentCard];
  }

  checkCardMatch(turnedCards) {
    return (turnedCards.map(card => card.groupId).reduce((acc, id) => (acc === id)));
  }

  markCardsAsFound(foundCards) {

  }

  handleCardTurn(turn: boolean, card: Card) {
    if (turn) {
      this.turnedCards.push(card);
    }
    if (this.turnedCards.length === 2 && this.checkCardMatch(this.turnedCards)) {
      this.markCardsAsFound(this.turnedCards);
    }
    if (this.turnedCards.length === 3) {
      this.resetCards(card);
    }
    console.log(this.turnedCards);
  }

  ngOnInit() {
    this.numberOfCards = 2 * this.numberOfGroups;

    this.orderArray = this.fillArray(this.numberOfCards);
    this.orderOfCards = this.permutateArray(this.orderArray);
    this.groupArray = this.fillArray(this.numberOfGroups);
    this.orderOfGroups = this.permutateArray(this.groupArray);

    this.allCards = this.permutateArray(this.generateCards(this.orderOfCards, this.orderOfGroups));
  }
}
