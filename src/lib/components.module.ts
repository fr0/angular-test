import {NgModule} from '@angular/core';
import {ItemsComponent} from './items-component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ItemsComponent],
  exports: [ItemsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
})
export class ComponentsModule {

}
