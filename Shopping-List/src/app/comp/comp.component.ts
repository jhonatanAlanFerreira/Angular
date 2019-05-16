import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private service: Service1Service) { }

  enviar(mensagem){
    console.log(">>>> "+mensagem);
    this.service.emitindo(mensagem);
  }

  ngOnInit() {
  }

}
