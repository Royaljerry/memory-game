import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../classes/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() numberOfGroups: number;
  @Input() data: [];
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

  resetCards(currentCard: Card, allCards: Card[]) {
    for (const card of allCards) {
      if (card !== currentCard && !card.found) {
        card.turned = false;
      }
    }
    this.turnedCards = [currentCard];
  }

  doCardsMatch(turnedCards) {
    return (turnedCards.map(card => card.groupId).reduce((acc, id) => (acc === id)));
  }

  isBoardSolved(allCards: Card[]) {
    return (allCards.map(card => card.found).every(id => id === true));
  }

  markCardsAsFound(foundCards: Card[]) {
    for (const card of foundCards) {
      card.found = true;
    }
  }

  handleCardTurn(turn: boolean, card: Card) {
    if (turn) {
      this.turnedCards.push(card);
    }
    if (this.turnedCards.length === 2 && this.doCardsMatch(this.turnedCards)) {
      this.markCardsAsFound(this.turnedCards);
      console.log(this.isBoardSolved(this.allCards));
    }
    if (this.turnedCards.length === 3) {
      this.resetCards(card, this.allCards);
    }
  }

  ngOnInit() {
    this.numberOfGroups = this.data.numberOfGroups;
    this.numberOfCards = 2 * this.numberOfGroups;

    console.log(this.numberOfCards);

    this.orderArray = this.fillArray(this.numberOfCards);
    this.orderOfCards = this.permutateArray(this.orderArray);
    this.groupArray = this.fillArray(this.numberOfGroups);
    this.orderOfGroups = this.permutateArray(this.groupArray);

    this.allCards = this.permutateArray(this.generateCards(this.orderOfCards, this.orderOfGroups));
  }
}
