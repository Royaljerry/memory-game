import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardId: number;
  @Input() groupId: number;
  @Input() turned: boolean;

  @Output() turnedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  swapCard() {
    this.turned = !this.turned;
    this.turnedChanged.emit(this.turned);
  }

  ngOnInit() { }

}
