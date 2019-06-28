import {Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    <label [style.opacity]="opacity">
      This has an opacity binding, and should not be visible
    </label>
  `
})
export class Route1Component {
  opacity = 0;
}
