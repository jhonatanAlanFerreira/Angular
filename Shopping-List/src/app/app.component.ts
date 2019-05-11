import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopping-List';
  @ViewChild('name') name: ElementRef;
  tamanhoTela: any;
  
  @HostListener ('window:resize', ['$event'])
  onResize(event) {
    this.tamanhoTela = window.innerWidth;
  }

  log(){
    console.log("Input >>> ",this.name.nativeElement.value);
  }

  change(){
    this.name.nativeElement.value = "Changed!";
    console.log("Changed >> ",this.name.nativeElement.value);
  }

  ngOnInit(){
    this.tamanhoTela = window.innerWidth;
  }

}
