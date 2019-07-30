import {Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    toolbar buttons below should be visible.
    <lib-toolbar>
      <lib-toolbar-button text="Button One" icon="/assets/circle-fill.svg"></lib-toolbar-button>
      <lib-toolbar-button text="Button Two" icon="/assets/circle-stroke.svg"></lib-toolbar-button>
    </lib-toolbar>

  `
})
export class Route1Component {

}
