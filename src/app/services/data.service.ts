import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from '@classes/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  turnedChanged$ = new Subject<Card>();
}
