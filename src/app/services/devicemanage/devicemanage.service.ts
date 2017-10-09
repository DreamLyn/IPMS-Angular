import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Deviceinfopage} from "../../beans/sysmanage/deviceinfopage";
import {Deviceinfo} from "../../beans/sysmanage/deviceinfo";

@Injectable()
export class DevicemanageService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {
    }
    
    /**
     * 获取引擎的滤波信息
     * @returns {Observable<Filterinfo>}
     */
    getDeviceInfoWithFilter(pageNow: number, pageSize: number, tops: boolean[], uses: boolean[], onlines: boolean[], asc: boolean): Observable<Deviceinfopage> {
        return this.http
            .post("/sysmanage/getdeviceinfoswithfilter", "", {
                headers: this.headers,
                params: {
                    pageNow: pageNow,
                    pageSize: pageSize,
                    tops: tops,
                    uses: uses,
                    onlines: onlines,
                    asc: asc
                }
            }).map((response) => {
                var temp = response.json();
                if (temp.status == "success") {
                    return temp.content;
                } else {
                    return null;
                }
            });
    }
    
    /**
     * 更新设备信息
     * @param {Deviceinfo} deviceInfo
     * @returns {Observable<any>}
     */
    updateDeviceInfo(deviceInfo: Deviceinfo) {
        return this.http
            .post("/sysmanage/updatedeviceinfo", "", {
                headers: this.headers,
                params: {
                    deviceId: deviceInfo.deviceId,
                    x: deviceInfo.x,
                    y: deviceInfo.y,
                    z: deviceInfo.z,
                    top: deviceInfo.top,
                    use: deviceInfo.use,
                }
            }).map(response => {
                var temp = response.json()
                if (temp.status == "success") {
                    return temp.content;
                } else {
                    return null;
                }
            });
    }
    
    /**
     * 删除设备信息
     * @param {Deviceinfo[]} deviceInfosArrayList
     * @returns {Observable<any>}
     */
    delDeviceInfos(deviceIdsArrayList: number[]) {
        return this.http
            .post("/sysmanage/deldeviceinfos", "", {
                headers: this.headers,
                params: {
                    deviceIdsArrayList: deviceIdsArrayList
                }
            }).map(response => {
                var temp = response.json()
                if (temp.status == "success") {
                    return temp.content;
                } else {
                    return null;
                }
            });
    }
}
