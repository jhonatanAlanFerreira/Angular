import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-List';
  name = "Jhonatan";

  typed(event){
    console.log(<HTMLInputElement>event.target.value);
  }
}
