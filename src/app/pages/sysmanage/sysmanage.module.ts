import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MdCardModule, MdChipsModule, MdInputModule, MdSidenavModule, MdToolbarModule} from '@angular/material';
import {DeviceconfigComponent} from "./deviceconfig/deviceconfig.component";
import {DevicemanageComponent} from "./devicemanage/devicemanage.component";
import {EnginemanageComponent} from "./enginemanage/enginemanage.component";
import {FiltermanageComponent} from "./enginemanage/filtermanage/filtermanage.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DevicemanageService} from "../../services/devicemanage/devicemanage.service";
import {EnginemanageService} from "../../services/enginemanage/enginemanage.service";
import { DevicemanageaddComponent } from './devicemanage/devicemanageadd/devicemanageadd.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        MdInputModule,
    ],
    declarations: [
        DeviceconfigComponent,
        DevicemanageComponent,
        EnginemanageComponent,
        FiltermanageComponent,
        DevicemanageaddComponent
    ],
    providers:[
        DevicemanageService,
        EnginemanageService
    ]
})
export class SysmanageModule {
}
