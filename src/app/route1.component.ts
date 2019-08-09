import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    If things are working, you wills see 10 items below.
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
