import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent implements OnInit {
  @ViewChild('tooltiptext') element:ElementRef;
  @ViewChild('square') square:ElementRef;
  @ViewChild('icon') icon:ElementRef;

  @Input('corFundo') background = "grey";
  @Input('corLetra') textcolor = "white";
  @Input('largura') width = 150;
  @Input('posicao') location = "baixo";
  @Input('movimento') move = true;
  @Input('corIcone') iconColor = "grey";
  @Input('tamanhoIcone') iconSize = "";

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement,"width",this.width+"px");
    this.renderer.setStyle(this.element.nativeElement,"color",this.textcolor);
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor",this.background);
    this.renderer.setStyle(this.icon.nativeElement,"color",this.iconColor);
    if(this.iconSize != "") this.renderer.addClass(this.icon.nativeElement,this.iconSize);
    if(!this.move) this.renderer.setStyle(this.element.nativeElement,"transform","none");

    switch(this.location){

    case "cima": this.renderer.setStyle(this.square.nativeElement,"borderColor",this.background+" transparent transparent transparent");
    this.renderer.setStyle(this.element.nativeElement,"margin-left",-this.width/2+"px");break;

    case "esquerda": this.renderer.setStyle(this.square.nativeElement,"borderColor","transparent transparent transparent "+this.background); break;
   
    case "direita": this.renderer.setStyle(this.square.nativeElement,"borderColor","transparent "+this.background+" transparent transparent"); break;
    
    default: this.renderer.setStyle(this.square.nativeElement,"borderColor","transparent transparent "+this.background+" transparent"); 
    this.renderer.setStyle(this.element.nativeElement,"margin-left",-this.width/2+"px"); break; 
    }
  }
}
