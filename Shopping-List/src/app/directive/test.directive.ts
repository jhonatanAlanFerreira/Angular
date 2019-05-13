import { Directive, OnInit, Renderer2, ElementRef, Input, HostListener, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Style } from './style.model';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[appEstilos]'
})
export class TestDirective implements OnInit, AfterContentInit {

  style:Style[] = [];
  @Input('appEstilos') estilos:[];

  // mouseenter is already known by Angular
  @HostListener('mouseenter') mouseHover() {
    this.styling(new Style("color","red"));
  }

  // filtering by key and geting the last element
  @HostListener('mouseleave') mouseOut(){
    let color = this.style.filter(element => element.style == "color");
    this.styling(color.slice(-1)[0]);
  }

  // elRef gets the element on which it was declared and element will be used by setStyle
  constructor(private element: Renderer2, private elRef: ElementRef) { }

ngOnInit(){

  if(this.estilos) 
  for(var i = 0; i < this.estilos.length; i++) 
  this.style.push(new Style(this.estilos[i],this.estilos[++i]));

  this.style.forEach(element => this.styling(element));
  
}

ngAfterContentInit(){
  
// just a test, it is not needed

console.log("Anterior >> ", this.style);

var ordenados = this.style.slice();

ordenados.sort((a,b) => a.value > b.value? 1:(b.value > a.value? -1: 0));

console.log("Ordenados >> ", ordenados);

}

// setStyle needs to have 3 elements, the first one is the element which has its declaration, then the style and its value
styling(styleToSet:Style){
  this.element.setStyle(this.elRef.nativeElement,styleToSet.style,styleToSet.value);
}

}
