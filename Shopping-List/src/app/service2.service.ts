import { Injectable, Output, EventEmitter } from '@angular/core';


export class Service2Service {

  @Output() event = new EventEmitter<string>();

  constructor() { }
}
