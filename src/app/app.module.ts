import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Route1Component} from './route1.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from 'angular-test';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'route1', component: Route1Component},
  {path: '', redirectTo: '/route1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
