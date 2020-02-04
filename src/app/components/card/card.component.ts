import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@classes/card';
import { DataService } from '@services/data.service';

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

  constructor(
    private dataService: DataService
  ) {}

  getImagePath(card: Card) {
    return card.turned ? '/images/group-' + Number(this.card.groupId + 1) + '.jpg' : '/images/backface.png';
  }

  swapCard(card: Card) {
    if (!card.found) {
      if (!card.turned) {
        card.turned = true;
        this.dataService.turnedChanged$.next(card);
      }
    }
  }

  ngOnInit() {
    this.width = `calc((100vw - ${this.sideLengths[0] - 1} * 16px) / ${this.sideLengths[0]})`;
    this.height = `calc((100vw - ${this.sideLengths[0] - 1} * 16px) / ${this.sideLengths[0]})`;
    this.maxWidth = `calc((100vh - ${this.sideLengths[1] - 1} * 16px) / ${this.sideLengths[1]})`;
    this.maxHeight = `calc((100vh - ${this.sideLengths[1] - 1} * 16px) / ${this.sideLengths[1]})`;
  }

}
