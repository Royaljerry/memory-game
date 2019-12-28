import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataFile = 'assets/data.json';
  dataValues: any = [];
  title: string;

  constructor(private httpClient: HttpClient) {}

  getData(dataFile: string) {
    this.httpClient.get(dataFile).subscribe(data => {
      this.dataValues = data;
    });
  }

  ngOnInit() {
    this.getData(this.dataFile);
  }
}
