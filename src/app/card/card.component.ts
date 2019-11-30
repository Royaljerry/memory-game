import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  private imagePath: string;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  get path(): string {
    return this.imagePath;
  }

  set path(groupId) {
    this.imagePath = '@content-images/test.jpg';
  }

  swapCard(card: Card) {
    if (!card.turned && !card.found) {
      card.turned = true;
      this.turnedChanged.emit(card.turned);
    }
  }

  constructor() {
    this.path = 'hello';
  }

  ngOnInit() { }

}
