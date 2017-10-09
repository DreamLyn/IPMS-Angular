import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Taginfopage} from "../../beans/sysinfo/taginfopage";

@Injectable()
export class TaginfoService {
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {
    
    }
    
    /**
     * 获取用户信息
     * @param {number} pageNow
     * @param {number} pageSize
     * @returns {Promise<any>}
     */
    getTagInfos(pageNow: number, pageSize: number): Observable<Taginfopage> {
        return this.http
            .post("/sysinfo/gettaginfoswithpage", "", {
                headers: this.headers,
                params: {
                    pageNow: pageNow,
                    pageSize: pageSize
                }
            }).map((response) => {
                return response.json();
            });
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
