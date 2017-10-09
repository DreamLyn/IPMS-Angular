import {Component, OnInit} from '@angular/core';
import {Page} from "../../../beans/page";
import {Devicestate} from "../../../beans/sysstate/devicestate";
import {DevicestateService} from "../../../services/devicestate/devicestate.service";
import "rxjs/add/operator/toPromise";
@Component({
    selector: 'app-devicestate',
    templateUrl: './devicestate.component.html',
    styleUrls: ['./devicestate.component.css']
})
export class DevicestateComponent implements OnInit {
    page: Page = new Page()
    _dataSet: Devicestate[] = [];
    loading = true;
    deviceIdSort = true;
    
    filters = {
        top: [
            {name: '在顶端', value: true},
            {name: '在地上', value: true}
        ],
        use: [
            {name: '用于定位', value: true},
            {name: '不用于定位', value: true}
        ],
        online: [
            {name: '在线', value: true},
            {name: '不在线', value: true}
        ],
    };
    uses: Array<boolean> = new Array();
    onlines: Array<boolean> = new Array();
    
    
    useChange(filter) {
        var useFilter = this.filters.use;
        if (useFilter[0].value && useFilter[1].value) {
            this.uses = new Array();
        } else if (useFilter[0].value && !useFilter[1].value) {
            this.uses = [true];
        } else if (!useFilter[0].value && useFilter[1].value) {
            this.uses = [false];
        } else if (!useFilter[0].value && !useFilter[1].value) {
            this.uses = [true, false];
        }
        this.refreshData(true)
    }
    
    onlineChange(filter) {
        var onlineFilter = this.filters.online;
        if (onlineFilter[0].value && onlineFilter[1].value) {
            this.onlines = new Array();
        } else if (onlineFilter[0].value && !onlineFilter[1].value) {
            this.onlines = [true];
        } else if (!onlineFilter[0].value && onlineFilter[1].value) {
            this.onlines = [false];
        } else if (!onlineFilter[0].value && !onlineFilter[1].value) {
            this.onlines = [true, false];
        }
        this.refreshData(true)
    }
    
    sort(value) {
        switch (value) {
            case "ascend":
                this.deviceIdSort = true;
                break;
            case "descend":
                this.deviceIdSort = false;
                break;
            default:
                this.deviceIdSort = true;
                break;
        }
        this.refreshData(true);
    }
    
    constructor(private devicestateService:DevicestateService) {
        this.page.pageSize = 8
        this.page.pageNumber = 1
    }
    
    refreshData(reset = false) {
        this.loading = true;
        this.devicestateService.getDeviceStateWithFilter(this.page.pageNumber - 1, this.page.pageSize, this.uses, this.onlines, this.deviceIdSort)
            .toPromise().then(response => {
                this.loading = false
                this.page.totalElements = response.totalElements
                this._dataSet = response.content
            }
        )
    };
    
    ngOnInit() {
        this.refreshData();
    }
    
}
