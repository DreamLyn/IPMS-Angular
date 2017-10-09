/**
 * Created by lyn on 2017-09-02.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from "./home.component";
import {DevicemanageComponent} from "../sysmanage/devicemanage/devicemanage.component";
import {EnginemanageComponent} from "../sysmanage/enginemanage/enginemanage.component";
import {DeviceconfigComponent} from "../sysmanage/deviceconfig/deviceconfig.component";
import {FiltermanageComponent} from "../sysmanage/enginemanage/filtermanage/filtermanage.component";
import {DevicestateComponent} from "../sysstate/devicestate/devicestate.component";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path:'devicestate',component:DevicestateComponent},
    
            {path: 'devicemanage', component: DevicemanageComponent},
            {path: 'deviceconfig', component: DeviceconfigComponent},
            {path: 'filtermanage', component: FiltermanageComponent},
            {path: 'enginemanage', component: EnginemanageComponent},
        ]
    },
    
    
    // {
    //     path: 'pages',
    //     component: PagesComponent,
    //     children: [
    //         {path: '', redirectTo: 'home', pathMatch: 'full'},
    //         {path: 'home', component:HomeComponent},
    //
    //         // {path: 'editors', loadChildren: './editors/editors.module#EditorsModule'},
    //         // {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
    //         // {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
    //         // {path: 'ui', loadChildren: './ui/ui.module#UiModule'},
    //         // {path: 'forms', loadChildren: './forms/forms.module#FormsModule'},
    //         // {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
    //         // {path: 'maps', loadChildren: './maps/maps.module#MapsModule'}
    //     ]
    // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
