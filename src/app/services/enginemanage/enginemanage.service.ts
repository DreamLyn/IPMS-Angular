import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Filterinfo} from "../../beans/sysmanage/filterinfo";
@Injectable()
export class EnginemanageService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {
    }
    
    /**
     * 获取引擎的滤波信息
     * @returns {Observable<Filterinfo>}
     */
    getFilterInfo():Observable<Filterinfo>{
        return this.http.post("/sysmanage/getfilterinfo","",{
            headers: this.headers,
        }).map(response=>{
            var temp = response.json();
            if(temp.status=="success"){
                return temp.content;
            }else{
                return null;
            }
        })
    }
    
}
