import { Directive, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { Style } from './style.model';

@Directive({
  selector: '[appEstilos]'
})
export class TestDirective implements OnInit {

  style:Style[] = [];
  @Input('appEstilos') estilos:[];

  constructor(private element: Renderer2, private elRef: ElementRef) { }

ngOnInit(){

  if(this.estilos) for(var i = 0; i < this.estilos.length; i++) this.style.push(new Style(this.estilos[i],this.estilos[++i]));

  this.style.forEach(element => this.styling(element));
  
}

styling(styleToSet:Style){
  this.element.setStyle(this.elRef.nativeElement,styleToSet.style,styleToSet.value);
}

}
