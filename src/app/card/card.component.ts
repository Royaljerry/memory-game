import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardId: number;
  @Input() groupId: number;
  @Input() turned: boolean;

  constructor() { }

  swapCard() {
    this.turned = !this.turned;
  }

  ngOnInit() { }

}
