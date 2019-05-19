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
  @Input('largura') width = 150;
  @Input('posicao') location = "baixo";
 
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement,"width",this.width+"px");
    this.renderer.setStyle(this.element.nativeElement,"margin-left",-this.width/2+"px");
    this.renderer.setStyle(this.element.nativeElement,"color",this.textcolor);
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.background);

    switch(this.location){
    case "cima": this.renderer.setStyle(this.square.nativeElement,"borderColor",this.background+" transparent transparent transparent");break;
    case "esquerda": this.renderer.setStyle(this.square.nativeElement,"borderColor","transparent transparent transparent "+this.background); break;
    case "direita": this.renderer.setStyle(this.square.nativeElement,"borderColor",this.background+" transparent transparent transparent"); break;
    default: this.renderer.setStyle(this.square.nativeElement,"borderColor","transparent transparent "+this.background+" transparent"); break; 
    }
  }

}
