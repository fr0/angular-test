import {NgModule, Type} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ExpandableComponent} from './expandable.component';
import {ExpandableIfComponent} from './expandable-if.component';

export const COMPONENTS: Type<any>[] = [
  ExpandableComponent,
  ExpandableIfComponent,
];

/**
 * The Angular module that contains all exported components and directives.
 */
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: COMPONENTS
})
export class ComponentsModule {}

