import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private httpserver: Http) {
  }
  title = 'app';
  private http: Http;
  result = []; // empty array 
  ngOnInit() {
    this.httpserver.get('http://localhost:3000/movies',)
      .subscribe(data => {
        this.result = data.json(); // CONVERT RESPONE TO JSON
      });
  }


}
