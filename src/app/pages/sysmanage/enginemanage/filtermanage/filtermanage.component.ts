import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EnginemanageService} from "../../../../services/enginemanage/enginemanage.service";
import {Filterinfo} from "../../../../beans/sysmanage/filterinfo";
import "rxjs/add/operator/toPromise";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-filtermanage',
    templateUrl: './filtermanage.component.html',
    styleUrls: ['./filtermanage.component.css']
})
export class FiltermanageComponent implements OnInit, OnChanges {
    
    filterForm: FormGroup;
    filterInfo: Filterinfo = new Filterinfo();
    
    constructor(private fb: FormBuilder, private engineManageService: EnginemanageService) {
    }
    
    submitForm() {
        for (const i in this.filterForm.controls) {
            this.filterForm.controls[i].markAsDirty();
        }
    }
    
    getFormControl(name) {
        return this.filterForm.controls[name];
    }
    
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        
            return {required: true};
        
    };
    
    resetForm(){
        this.engineManageService.getFilterInfo().toPromise().then(response => {
            if (response != null) {
                this.filterInfo = response;
                this.filterForm.setValue({
                    rssidiff: this.filterInfo.rssidiff,
                    rssi: this.filterInfo.rssi,
                    firstrssi: this.filterInfo.firstrssi,
                    timdiff: this.filterInfo.timdiff,
                    distance: this.filterInfo.distance,
                    angle: this.filterInfo.angle,
                    prefilter: this.filterInfo.prefilter,
                    filterlength: this.filterInfo.filterlength,
                    excursion: this.filterInfo.excursion,
                    filterlength2: this.filterInfo.filterlength2,
                    filterdelay: this.filterInfo.filterdelay
                })
            }
        });
    }
    ngOnInit() {
        this.filterForm = this.fb.group({
            rssidiff: ["", [Validators.required, this.confirmationValidator]],
            rssi: ["", [Validators.required, this.confirmationValidator]],
            firstrssi: ["", [Validators.required, this.confirmationValidator]],
            timdiff: ["", [Validators.required, this.confirmationValidator]],
            distance: ["", [Validators.required, this.confirmationValidator]],
            angle: ["", [Validators.required, this.confirmationValidator]],
            prefilter: ["", [Validators.required, this.confirmationValidator]],
            filterlength: ["", [Validators.required, this.confirmationValidator]],
            excursion: ["", [Validators.required, this.confirmationValidator]],
            filterlength2: ["", [Validators.required, this.confirmationValidator]],
            filterdelay: ["", [Validators.required, this.confirmationValidator]]
            
        });
        this.resetForm()
        
    }
    
    ngOnChanges(changes: SimpleChanges): void {
    
    }
    
}
