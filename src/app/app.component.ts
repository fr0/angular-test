import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>test app</h1>
    <a [routerLink]="'/route1'">route1</a>
    <router-outlet></router-outlet>
  `,
  styles: [`

  `]
})
export class AppComponent {

}
