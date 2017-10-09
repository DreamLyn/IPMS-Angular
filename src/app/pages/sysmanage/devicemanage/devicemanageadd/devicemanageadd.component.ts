import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-devicemanageadd',
    templateUrl: './devicemanageadd.component.html',
    styleUrls: ['./devicemanageadd.component.css']
})
export class DevicemanageaddComponent implements OnInit {
    
    isVisible = false;
    isConfirmLoading = false;
    
    showModal = () => {
        this.isVisible = true;
    }
    
    handleOk = (e) => {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 3000);
    }
    
    handleCancel = (e) => {
        this.isVisible = false;
    }
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
    
}
