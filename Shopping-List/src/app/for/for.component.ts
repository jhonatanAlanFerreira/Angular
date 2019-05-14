import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  @Input() dados;
  @Input() cada:string;
  @ViewChild('element') element: ElementRef;

  constructor() { }

  ngOnInit() {
    let element = this.element.nativeElement.innerHTML;
    for(var i = 0; i < this.dados.length; i++) 
    this.element.nativeElement.innerHTML = i == 0 ? 
    this.element.nativeElement.innerHTML.toString().replace(this.cada,<string>this.dados[0])  
    :this.element.nativeElement.innerHTML + element.toString().replace(this.cada,<string>this.dados[i]); 
  }
}