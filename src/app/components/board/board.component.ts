import { Component, Input, OnInit } from '@angular/core';
import { RjArray } from '@utilities/rj-array';
import { RjNumber } from '@utilities/rj-number';
import { Card } from '@classes/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() data;
  numberOfGroups: number;
  numberOfCards: number;
  divisorsOfNumberOfCards: number[];
  sideLengths: number[];
  orderArray = [];
  orderOfCards: number[];
  groupArray = [];
  orderOfGroups: number[];
  allCards: Card[];
  turnedCards: Card[] = [];

  constructor() { }

  getSideLengths(divisors: number[]) {
    let centerItem;
    let centerItems;
    if (divisors.length % 2 === 0) {
      centerItems = divisors.filter((e, i, a) => i === a.length / 2 || i === a.length / 2 - 1);
    } else {
      centerItem = divisors.filter((e, i, a) => i === (a.length - 1) / 2);
      centerItems = [...centerItem, ...centerItem];
    }
    centerItems = window.innerWidth >= window.innerHeight ? [centerItems[1], centerItems[0]] : centerItems;
    return centerItems;
  }

  setupCardsGrid(sideLengths: number[]) {
    return {
      'grid-template-columns': `repeat(${sideLengths[0]}, 1fr)`,
      'grid-template-rows': `repeat(${sideLengths[1]}, 1fr)`
    };
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
    this.divisorsOfNumberOfCards = RjNumber.findDivisors(this.numberOfCards);
    this.sideLengths = this.getSideLengths(this.divisorsOfNumberOfCards);

    this.orderArray = RjArray.fillArray(this.numberOfCards);
    this.orderOfCards = RjArray.permutateArray(this.orderArray);
    this.groupArray = RjArray.fillArray(this.numberOfGroups);
    this.orderOfGroups = RjArray.permutateArray(this.groupArray);

    this.allCards = RjArray.permutateArray(this.generateCards(this.orderOfCards, this.orderOfGroups));
  }
}
