import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '@classes/card';
import { CardComponent } from '@components/card/card.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let numberOfGroups;
  let numberOfCards;
  const dataMock = {
    title: 'Memory Game in Black Dog',
    numberOfGroups: 15
  };

  // @Component({
  //   selector: 'app-card',
  //   template: '<div></div>'
  // })
  // class CardComponentMock {
  //
  //   card: Card;
  //   sideLengths: number[];
  //   width: string;
  //   height: string;
  //   maxWidth: string;
  //   maxHeight: string;
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CardComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    component.data = dataMock;
    numberOfGroups = component.data.numberOfGroups;
    numberOfCards = 2 * numberOfGroups;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
