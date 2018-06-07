import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiFeaturesComponent } from './ui-features.component';

import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [{
    path: 'buttons',
    component: ButtonsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
