import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() numberOfPairs: number;
  numberOfCards: number;
  cards: Card[];
  base = [];

  constructor() { }

  generateBaseArray() {
    this.base = new Array(this.numberOfCards).fill(0, 0, this.numberOfCards).map((x, i) => i);
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

  generateBoard() {

  }

  // generatePair() {
  //
  // }

  ngOnInit() {
    this.numberOfCards = 2 * this.numberOfPairs;
    this.generateBaseArray();
    // this.cards = ;
    console.log(this.permutateArray(['a', 'b', 'c']));
  }
}
