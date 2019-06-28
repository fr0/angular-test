import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../components/components.module';
import {Route1Component} from './route1.component';
import {Router, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'route1', component: Route1Component},
  {path: '', redirectTo: '/route1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
