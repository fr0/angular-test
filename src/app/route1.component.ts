import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `
    <app-expandable-if isExpanded="true">
      <div header>this is the header</div>
      <div body>this is the body</div>
    </app-expandable-if>
    
  `
})
export class Route1Component {

}
