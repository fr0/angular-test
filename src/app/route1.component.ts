import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    Route1Component
  `
})
export class Route1Component implements OnInit {
  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const div = document.createElement('div');
    div.classList.add('thing');
    div.innerText = 'this is the dynamic div';
    this.element.nativeElement.appendChild(div);
  }
}
