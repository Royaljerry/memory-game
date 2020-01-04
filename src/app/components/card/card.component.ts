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
    // const isPortrait = RjViewport.isPortrait;
    // const spreadBase = isPortrait ? '100vh' : '100vw';
    // const spreadMax = !isPortrait ? '100vh' : '100vw';
    // const sideLengthMax = !isPortrait ? sideLengths[1] : sideLengths[0];
    // console.log(isPortrait, spreadBase, spreadMax);
    // return {
    //   width: `calc((${spreadBase} - ${sideLengths[0] - 1} * 16px) / ${sideLengths[0]})`,
    //   height: `calc((${spreadBase} - ${sideLengths[0] - 1} * 16px) / ${sideLengths[0]})`,
    //   maxWidth: `calc((${spreadMax} - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`,
    //   maxHeight: `calc((${spreadMax} - ${sideLengthMax - 1} * 16px) / ${sideLengthMax})`
    // };
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
