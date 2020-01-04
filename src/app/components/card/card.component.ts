import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() sideLengths: number[];

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  setupCardDimensions(sideLengths) {
    const largerSpread = Math.max(window.innerWidth, window.innerHeight);
  }

  getImagePath(card: Card) {
    return card.turned ? '/images/group-' + Number(this.card.groupId + 1) + '.jpg' : '/images/backface.png';
  }

  swapCard(card: Card) {
    if (!card.found) {
      if (!card.turned) {
        card.turned = true;
        this.turnedChanged.emit(card.turned);
      }
    }
  }

  ngOnInit() { }

}
