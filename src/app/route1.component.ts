import {Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    <label [style.opacity]="opacity">
      This has an opacity binding, and should not be visible
    </label>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-bottom: 20px;
    }
    div[header] {
      font-weight: bold;
    }
    div[body] {
      margin-left: 20px;
    }
    .code {
      font-family: monospace;
    }
    app-expandable, app-expandable-if {
      margin-bottom: 6px;
    }
  `]
})
export class Route1Component {
  opacity = 0;
}
