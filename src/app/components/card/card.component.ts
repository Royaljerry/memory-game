import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  imagePath: string;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  resetCard(card: Card) {

  }

  swapCard(card: Card) {
    console.log(card, ' before: ', this.imagePath);
    if (!card.found) {
      if (!card.turned) {
        card.turned = true;
        this.imagePath = '/images/group-' + Number(this.card.groupId + 1) + '.jpg';
        this.turnedChanged.emit(card.turned);
      }
      // this.imagePath = card.turned ? '/images/group-' + Number(this.card.groupId + 1) + '.jpg' : '/images/backface.png';
      console.log(card, ' after: ', this.imagePath);
    }
  }

  ngOnInit() {
    this.imagePath = '/images/backface.png';
    console.log(this.imagePath);
  }

}
