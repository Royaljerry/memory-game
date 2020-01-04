import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@classes/card';
import { RjViewport } from '@utilities/rj-viewport';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() sideLengths: number[];
  width: string;
  height: string;
  maxWidth: string;
  maxHeight: string;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

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

  ngOnInit() {
    const sideLengthMin = this.sideLengths[0];
    const sideLengthMax = this.sideLengths[1];
    console.log(RjViewport.isPortrait, sideLengthMin, sideLengthMax);
    switch (RjViewport.isPortrait) {
      case true:
        this.width = `100vw - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`;
        this.height = `100vw - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`;
        this.maxWidth = `100vh - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`;
        this.maxHeight = `100vh - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`;
        break;
      case true:
        this.width = `100vw - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`;
        this.height = `100vw - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`;
        this.maxWidth = `100vh - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`;
        this.maxHeight = `100vh - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`;
        break;
    }
  }

}
