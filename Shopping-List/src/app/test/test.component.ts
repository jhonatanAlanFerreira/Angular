import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ServiceService]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
