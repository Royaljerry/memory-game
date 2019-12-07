import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  numberOfGroups: number;
  hello: string;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(){
    this.httpClient.get('../assets/data.json').subscribe(data => {
      console.log(data);
    });
  }
}
