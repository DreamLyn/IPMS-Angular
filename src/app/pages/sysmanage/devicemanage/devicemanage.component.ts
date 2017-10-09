import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from "../../../beans/page";
import {Deviceinfo} from "../../../beans/sysmanage/deviceinfo";
import {DevicemanageService} from "../../../services/devicemanage/devicemanage.service";
import "rxjs/add/operator/toPromise";
import {DevicemanageaddComponent} from "./devicemanageadd/devicemanageadd.component";

@Component({
    selector: 'app-devicemanage',
    templateUrl: './devicemanage.component.html',
    styleUrls: ['./devicemanage.component.css']
})
export class DevicemanageComponent implements OnInit {
    @ViewChild(DevicemanageaddComponent) addModal: DevicemanageaddComponent;
    showAddModal = () => {
        this.addModal.showModal();
    }
    clearFilter = () => {
        this.filters.top[0].value = true;
        this.filters.top[1].value = true;
        this.filters.use[0].value = true;
        this.filters.use[1].value = true;
        this.filters.online[0].value = true;
        this.filters.online[1].value = true;
        this.tops = new Array();
        this.uses = new Array();
        this.onlines = new Array();
        this.refreshData();
    }
    
    _allChecked = false;
    _checkedNumber = 0;
    _indeterminate = false;
    disabledDelete = true;
    deleteOperating = false;
    
    _refreshStatus() {
        const allChecked = this._dataSet.every(value => value.checked === true);
        const allUnChecked = this._dataSet.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this.disabledDelete = !this._dataSet.some(value => value.checked);
        this._checkedNumber = this._dataSet.filter(value => value.checked).length;
    };
    
    _checkAll(value) {
        if (value) {
            this._dataSet.forEach(data => data.checked = true);
        } else {
            this._dataSet.forEach(data => data.checked = false);
        }
        this._refreshStatus();
    };
    
    /**
     * 删除操作
     * @private
     */
    deleteDevices() {
        this.deleteOperating = true;
        var deviceIdsArrayList:number[]=new Array()
        this._dataSet.forEach(value => {
            if(value.checked){
                deviceIdsArrayList.push(value.deviceId)
            }
        });
        console.log(deviceIdsArrayList)
        this.deviceManageService.delDeviceInfos(deviceIdsArrayList).toPromise().then(response=>{
            this._dataSet.forEach(value => value.checked = false);
            this._refreshStatus();
            this.deleteOperating = false;
            this.refreshData(true);
        })
    };
    
    /**
     * 表格
     * @type {Page}
     */
    page: Page = new Page()
    _dataSet: Deviceinfo[] = [];
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
    tops: Array<boolean> = new Array();
    uses: Array<boolean> = new Array();
    onlines: Array<boolean> = new Array();
    
    /**
     * filter变动事件
     * @param filter
     */
    topChange(filter) {
        var topFilter = this.filters.top;
        if (topFilter[0].value && topFilter[1].value) {
            this.tops = new Array();
        } else if (topFilter[0].value && !topFilter[1].value) {
            this.tops = [true];
        } else if (!topFilter[0].value && topFilter[1].value) {
            this.tops = [false];
        } else if (!topFilter[0].value && !topFilter[1].value) {
            this.tops = [true, false];
        }
        this.refreshData(true)
    }
    
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
    
    constructor(private deviceManageService: DevicemanageService) {
        this.page.pageSize = 8
        this.page.pageNumber = 1
    }
    
    refreshData(reset = false) {
        this.loading = true;
        this.deviceManageService.getDeviceInfoWithFilter(this.page.pageNumber - 1, this.page.pageSize, this.tops, this.uses, this.onlines, this.deviceIdSort)
            .toPromise().then(response => {
                this.loading = false
                this.page.totalElements = response.totalElements
                this._dataSet = response.content
                this._refreshStatus()
            }
        )
        
    }
    
    /**
     * 可编辑表格
     * @type {any}
     */
    editRow = null;
    tempEditObject = {};
    edit(data) {
        this.tempEditObject[ data.deviceId ] = { ...data };
        this.editRow = data.deviceId;
    }
    
    cancelEdit(data) {
        this.tempEditObject[ data.deviceId ] = {};
        this.editRow = null;
    }
    
    confirmSave(data) {
        //校验数据正确定，然后提交表单，之后对数据进行同步
        this.deviceManageService.updateDeviceInfo(data).toPromise().then(response=>{
            console.log(response)
            if(response.content=="success"){
                Object.assign(data, this.tempEditObject[ data.deviceId ]);
                this.editRow = null;
            }else{
            
            }
        })
    }
    
    delete(data) {
        this.tempEditObject[ data.deviceId ] = { ...data };
        this.editRow = data.deviceId;
    }
    
    config(data) {
        this.tempEditObject[ data.deviceId ] = { ...data };
        this.editRow = data.deviceId;
    }
    ngOnInit() {
        this.refreshData();
    }
    
}
