import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { ButtonsComponent } from './buttons.component';

const components = [
  ButtonsComponent,

];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
