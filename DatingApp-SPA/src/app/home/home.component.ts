import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  items: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getItems() {
    this.http.get('http://localhost:59855/api/items')
          .subscribe(res => {
            this.items = res;
          }, err => {
            console.log(err);
          });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
