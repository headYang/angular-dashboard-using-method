import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: PagesComponent, children:[
        { path: 'home', component: DashboardComponent },
        {
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule',
        },
        {
            path: 'ui-features',
            loadChildren: './ui-feature/ui-features.module#UiFeaturesModule',
        },
        {
            path: 'forms',
            loadChildren: './forms/forms.module#FormsModule',
        },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {

}
