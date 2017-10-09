import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-enginemanage',
    templateUrl: './enginemanage.component.html',
    styleUrls: ['./enginemanage.component.css']
})
export class EnginemanageComponent implements OnInit {
    
    
    _position = 'right';
    tabs = [
        {
            index: 1,
            text:"滤波配置"
        },
        {
            index: 2,
            text:"目标配置"
        },
        {
            index: 3,
            text:"区域配置"
        }
    ];
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
