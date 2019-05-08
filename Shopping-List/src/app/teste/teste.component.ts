import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  @Output() emit = new EventEmitter<void>();

  constructor() { }

  enviar(){
    this.emit.emit();
    console.log(">>>>>>>");
  }

  ngOnInit() {
  }

}
