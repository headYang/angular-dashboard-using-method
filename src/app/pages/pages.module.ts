import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const PAGES_COMPONENTS = [
    PagesComponent,
  ];

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule
    ],
    declarations: [PagesComponent, DashboardComponent]
})
export class PagesModule {

}
