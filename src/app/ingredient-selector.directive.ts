import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIngredientSelector]'
})
export class IngredientSelectorDirective implements OnInit{

  @HostListener('click') mouseClicked(eventData: Event)
  {
    alert("Clicked from directive");
  }

  constructor(elref: ElementRef, rederer:Renderer2) { }

  ngOnInit(): void {
  }
}
