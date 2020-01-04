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

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  setupCardDimensions(sideLengths) {
    const sideLengthMin = sideLengths[0];
    const sideLengthMax = sideLengths[1];
    console.log(RjViewport.isPortrait, sideLengthMin, sideLengthMax);
    // switch (RjViewport.isPortrait) {
    //   case true:
    //     return {
    //       width: `100vw - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`,
    //       height: `100vw - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`,
    //       maxWidth: `100vh - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`,
    //       maxHeight: `100vh - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`
    //     };
    //   case false:
    //     return {
    //       width: `100vw - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`,
    //       height: `100vw - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`,
    //       maxWidth: `100vh - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`,
    //       maxHeight: `100vh - ${sideLengthMin - 1} * 16px) / ${sideLengthMin})`
    //     };
    // }
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
