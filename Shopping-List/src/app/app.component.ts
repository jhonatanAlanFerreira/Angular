import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-List';
  name;
  
  getValue(value){
    this.name = value;
    console.log("Element",this.name);
  }

}
