import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  variable = "Testando...";

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.call.subscribe(()=>{
      this.variable = "Modificado...";
    })
  }

}
