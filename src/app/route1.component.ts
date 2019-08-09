import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    <app-items [count]="count"></app-items>
  `
})
export class Route1Component implements AfterViewInit {
  count = 0;
  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.count = 10;
    });
  }
}
