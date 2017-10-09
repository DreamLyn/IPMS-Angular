import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'sysinfo', component: SysinfoComponent},
    // {path: 'sysmanage', component: SysmanageComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
