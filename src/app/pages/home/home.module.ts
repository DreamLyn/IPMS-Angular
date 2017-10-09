import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MdCardModule, MdGridListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {routing} from './home-routing';
import {SysmanageModule} from '../sysmanage/sysmanage.module';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {SysstateModule} from "../sysstate/sysstate.module";

@NgModule({
    imports: [
        CommonModule,
        MdGridListModule,
        MdCardModule,
        RouterModule,
        NgZorroAntdModule,
        ////
        SysstateModule,
        SysmanageModule,
        routing
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule {
}
