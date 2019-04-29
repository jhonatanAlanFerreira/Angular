import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  constructor(private service:ServiceService) { }

  chamar(){
    this.service.chamar();
  }

  ngOnInit() {
  }

}
