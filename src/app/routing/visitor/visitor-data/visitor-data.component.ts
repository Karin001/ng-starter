import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PvUvService } from 'src/app/shared/pv-uv/pv-uv.service';

import { DateFormat } from '../../../utils/dateFormat';
import { forEach } from '@angular/router/src/utils/collection';
import { CalendarDateService } from 'src/app/core/blog/calendarDate.service';
import { NbDialogService } from '@nebular/theme';
import { CalendarDialogComponent } from '../calendarDialog.component';
import { SpinerService } from 'src/app/core/ui/spiner.service';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-visitor-data',
  templateUrl: './visitor-data.component.html',
  styleUrls: ['./visitor-data.component.scss']
})
export class VisitorDataComponent implements OnInit, AfterViewInit {
  data;
  date = new Date();
  filter;
  mergeData_bingtu = {};
  mergeData_pvuv = {};
  bingtuData = [];
  options;
  option = {

    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: this.bingtuData,
        roseType: 'angle',
      }
    ]
  };
  constructor(
    private pvuv: PvUvService,
    private dateService: CalendarDateService,
    private dialogService: NbDialogService,
    private spinerService: SpinerService
  ) {
    this.pvuv.getPvUv({
      apiUrl: '/api/util/PvUv',
      name: 'home-page'
    }).pipe(
      tap(res => {
        this.data = res.payload;
        // set calender date view filter
        this.filter = (date) => date >= this.getFirstAccessDate(this.data) &&
          date <= Date.now();
        this.dateService.setDateFilter(this.filter);
        this.pvuvInit();
      }),
      switchMap((data) => this.dateService.getDate())
    ).subscribe(date => {
      this.date = date;
      console.log('dateSer', date);

      this.findDayAndRender_bingtu(date);
      this.findDayAndRender_pvuv();



    });
  }

  openWithBackdropClick() {
    this.open(true);
  }



  protected open(closeOnBackdropClick: boolean) {
    this.dialogService.open(CalendarDialogComponent, { closeOnBackdropClick });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.spinerService.loadOver(true);
  }
  getFirstAccessDate(payload) {
    const fitstDateString = payload.accessData[0].accessDate;
    return new Date(fitstDateString);
  }
  findDayAndRender_pvuv() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    for (let i = 0; i < 7; i++) {
      const date_temp = new Date(this.date.getTime() - i * 24 * 60 * 60 * 1000);
      xAxisData.unshift(date_temp.getDate());
      if (!this.data.accessData.find(
        val => val.accessDate === DateFormat(date_temp, 'yyyy/MM/dd'))) {
        data1.unshift(0);
        data2.unshift(0);
      } else {
        const pvuv = this.data.accessData.find(
          val => val.accessDate === DateFormat(date_temp, 'yyyy/MM/dd'));
        data1.unshift(pvuv.pv);
        data2.unshift(pvuv.uv);
      }
    }
    this.mergeData_pvuv = {
      xAxis: {
        data: xAxisData,
      },
      series: [{
        data: data1,
      }, {
        data: data2,
      }],
    };
  }
  findDayAndRender_bingtu(date: Date) {
    const thedayString = DateFormat(date, 'yyyy/MM/dd');

    const theday = this.data.accessData.find(day => day.accessDate === thedayString);
    let [Chrome, Firefox, Opera, Edge, others] = [0, 0, 0, 0, 0];
    theday.statIds.forEach(ele => {
      switch (ele.browser) {
        case 'Chrome':
          Chrome++;
          break;
        case 'Firefox':
          Firefox++;
          break;
        case 'Opera':
          Opera++;
          break;
        case 'Edge':
          Edge++;
          break;
        default:
          others++;
          break;
      }
    });
    const sum = Chrome + Firefox + Opera + Edge + others;
    this.bingtuData = [
    ];
    const browsers = [
      { name: 'Chrome', value: Chrome },
      { name: 'Firefox', value: Firefox },
      { name: 'Opera', value: Opera },
      { name: 'Edge', value: Edge },
      { name: 'others', value: others }
    ];
    browsers.forEach(ele => {
      if (ele.value > 0) {
        this.bingtuData.push(ele);
      }
    });
    console.log(this.bingtuData)

    this.mergeData_bingtu = {
      series: [
        { data: this.bingtuData }
      ]
    };
  }
  pvuvInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    this.options = {
      legend: {
        data: ['pv', 'uv'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        axisLine: {
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
              }, {
                offset: 1, color: 'blue' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: 'red' // 0% 处的颜色
              }, {
                offset: 1, color: 'blue' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
          }
        }


      },
      series: [{
        name: 'pv',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'uv',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

}
