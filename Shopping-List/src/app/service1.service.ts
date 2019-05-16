import { Injectable, Output, EventEmitter } from '@angular/core';
import { Service2Service } from './service2.service';

@Injectable()
export class Service1Service {

  @Output () event = new EventEmitter<string>();

  emitindo(mes){
    this.event.emit(mes);
    this.service.event.emit("Para service 2");
  }

  constructor(private service:Service2Service) { }
}
