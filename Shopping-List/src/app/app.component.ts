import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopping-List';
  name;
  tamanhoTela: any;
  
  getValue(value){
    this.name = value;
    console.log("Element",this.name);
  }

  @HostListener ('window:resize', ['$event'])
  onResize(event) {
    this.tamanhoTela = window.innerWidth;
  }

  ngOnInit(){
    this.tamanhoTela = window.innerWidth;
  }

}
