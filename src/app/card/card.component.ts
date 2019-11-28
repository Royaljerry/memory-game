import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  swapCard() {
    this.card.turned = !this.card.turned;
    this.turnedChanged.emit(this.card.turned);
  }

  ngOnInit() { }

}
