import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  @Output() call = new EventEmitter<void>();


  chamar(){
    this.call.emit();
  }

  constructor() { }
}
