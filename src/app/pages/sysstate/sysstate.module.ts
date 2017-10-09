import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { DevicestateComponent } from './devicestate/devicestate.component';
import {DevicestateService} from "../../services/devicestate/devicestate.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
    ],
    declarations: [ DevicestateComponent],
    providers:[DevicestateService]
})
export class SysstateModule {
}
