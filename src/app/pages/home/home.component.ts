import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    leftMenu = [
        {
            text: '系统状态',
            icon: 'anticon anticon-info-circle-o',
            open: (location.href.toString().indexOf('/devicestate')>=0),
            url: '/home',
            children: [
                {
                    text: '基站状态',
                    url: '/devicestate',
                    selected: location.href.toString().indexOf('/devicestate') >= 0,
                }
            ]
        },
        {
            text: '系统管理',
            icon: 'anticon anticon-setting',
            open: (location.href.toString().indexOf('/devicemanage') >= 0) ||
                    (location.href.toString().indexOf('/enginemanage') >= 0),
            url: '/home',
            children: [
                {
                    text: '基站管理',
                    url: '/devicemanage',
                    selected: location.href.toString().indexOf('/devicemanage') >= 0,
                },
                {
                    text: '引擎配置',
                    url: '/enginemanage',
                    selected: location.href.toString().indexOf('/enginemanage') >= 0,
                },
                // {
                //     text:'标签管理',
                // },
                // {
                //     text:'围栏管理',
                // }
            ]
        },
        // {
        //     text: '系统分析',
        //     icon: 'anticon anticon-setting' ,
        //     open:location.href.toString().indexOf('/enginemanage')>=0,
        //     url: '/home',
        //     children: [
        //         {
        //             text:'同步分析',
        //             url:'/devicemanage',
        //             selected:location.href.toString().indexOf('/devicemanage')>=0,
        //         },
        //         {
        //             text:'定位分析',
        //             url:'/filtermanage',
        //             selected:location.href.toString().indexOf('/filtermanage')>=0,
        //         }
        //
        //     ]
        // },
        // {
        //     text: '定位显示',
        //     icon: 'anticon anticon-setting' ,
        //     open: location.href.toString().indexOf('/enginemanage')>=0,
        //     url: '/home',
        //     children: [
        //         {
        //             text:'定位',
        //             url:'/devicemanage',
        //             selected:location.href.toString().indexOf('/enginemanage')>=0,
        //         }
        //     ]
        // }
    
    
    ];
    
    constructor(private router: Router, private route: ActivatedRoute) {
        
        var url = route.url.map(segments => segments.join(''))
        console.log(url)
        
    }
    
    ngOnInit() {
    }
    
    itemSelect(url) {
        this.router.navigate([url]);
    }
}
