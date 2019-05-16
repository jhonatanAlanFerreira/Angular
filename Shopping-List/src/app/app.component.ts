import { Component, OnInit } from '@angular/core';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service1Service, Service2Service]
})
export class AppComponent implements OnInit{
  title = 'Shopping-List';
  name = "Jhonatan";

  number = 10;

  constructor (private service:Service1Service, private service2:Service2Service) {}

  ngOnInit(){
    this.service.event.subscribe(mes => console.log("Mensagem recebida >> " + mes));

    this.service2.event.subscribe(mess => console.log(mess));

  }
  
}
