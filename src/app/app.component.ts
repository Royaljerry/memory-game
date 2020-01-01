import { Component, OnInit } from '@angular/core';
import data from '@assets/data.json';
import { Data } from '@models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Data;
  dataValues: any = data;
  title: string;

  constructor() {
    this.data = data;
    this.title = this.data.title;
  }

  ngOnInit() {}
}
