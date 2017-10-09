import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
//第三方开发包
import {AppComponent} from './app.component';


import {routing} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./pages/home/home.module";
import {HttpModule} from "@angular/http";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpModule,
        //第三方,
        HomeModule,
        NgZorroAntdModule.forRoot(),
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
