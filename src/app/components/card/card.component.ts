import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  private imagePath: string;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  swapCard(card: Card) {
    if (!card.turned && !card.found) {
      card.turned = true;
      this.turnedChanged.emit(card.turned);
    }
  }

  ngOnInit() {
    this.imagePath = '/images/group-' + Number(this.card.groupId + 1) + '.jpg';
    console.log(this.imagePath);
  }

}
