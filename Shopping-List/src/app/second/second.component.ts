import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  @Input() set call(num){
    if(num > 0) console.log('Recebido!',num);
  }

  ngOnInit() {
  }

}
