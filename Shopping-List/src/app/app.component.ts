import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enabled = false;
  count = 0;
  logs = [];

  names = ["Jhonatan","Alan","Bertini","Ferreira"];

  isClicked(){
    this.enabled = !this.enabled;
    console.log(this.logs.push(++this.count));
  }
}
