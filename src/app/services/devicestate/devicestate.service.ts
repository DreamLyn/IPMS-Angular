import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Devicestatepage} from "../../beans/sysstate/devicestatepage";
@Injectable()
export class DevicestateService {
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {
    }
    
    /**
     * 获取用户信息
     * @param {number} pageNow
     * @param {number} pageSize
     * @returns {Promise<any>}
     */
    getDeviceStateWithFilter(pageNow: number, pageSize: number,uses:boolean[],onlines:boolean[],asc:boolean): Observable<Devicestatepage> {
        return this.http
            .post("/sysstate/getdevicestatewithfilter", "", {
                headers: this.headers,
                params: {
                    pageNow: pageNow,
                    pageSize: pageSize,
                    uses:uses,
                    onlines:onlines,
                    asc:asc
                }
            }).map((response)=>{
                return response.json();
            });
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
