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
  cards: Card[];

  constructor() { }

  fillArray(arrayLength) {
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

  generateCards(orderOfCards, orderOfGroups) {
    const cards: Card[] = [];
    for (const index in orderOfGroups) {
      const card1 = new Card(orderOfCards[2 * index], orderOfGroups[index], false);
      const card2 = new Card(orderOfCards[(2 * index) + 1], orderOfGroups[index], false);
      cards.push(card1);
      cards.push(card2);
    }
    return cards;
  }

  // generateBoard() {
  //
  // }

  // generatePair() {
  //
  // }

  ngOnInit() {
    this.numberOfCards = 2 * this.numberOfGroups;

    this.orderArray = this.fillArray(this.numberOfCards);
    this.orderOfCards = this.permutateArray(this.orderArray);
    this.groupArray = this.fillArray(this.numberOfGroups);
    this.orderOfGroups = this.permutateArray(this.groupArray);

    this.cards = this.generateCards(this.orderOfCards, this.orderOfGroups);

    console.log(this.cards);
  }
}
