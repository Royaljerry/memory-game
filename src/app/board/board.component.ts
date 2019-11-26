import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() numberOfPairs;
  cardArray: number[];

  constructor() { }

  ngOnInit() {
    this.cardArray = new Array(2 * this.numberOfPairs);
  }

}
