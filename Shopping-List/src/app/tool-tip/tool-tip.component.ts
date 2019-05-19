import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent implements OnInit {
  @ViewChild('tooltiptext') element:ElementRef;
  @ViewChild('square') square:ElementRef;

  @Input('corFundo') background = "grey";
  @Input('corLetra') textcolor = "white";

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.background);
    this.renderer.setStyle(this.square.nativeElement,"borderColor",this.background+" transparent transparent transparent");

    this.renderer.setStyle(this.element.nativeElement,"color",this.textcolor);
  }

}
