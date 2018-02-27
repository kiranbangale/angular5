import { Component, OnInit, ElementRef } from '@angular/core';
// import { WeatherService } from './services/weather.service';
import { Chart } from 'chart.js';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  public carouselOne: NgxCarousel;

  title = 'app';
  chart = []; // This will hold our chart info

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.setup();
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  setup() { 
    let htmlRef1 = this.elementRef.nativeElement.querySelector(`#canvas1`); 
    let htmlRef2 = this.elementRef.nativeElement.querySelector(`#canvas2`); 
    let htmlRef3 = this.elementRef.nativeElement.querySelector(`#canvas3`); 
    var color = Chart.helpers.color; 

    var horizontalBarChartData = { 
        // labels: ['In Progress', 'New', 'Re-open'], 
        labels: ['In Progress'], 
        datasets: [ 
        { 
        label: 'UI Major', 
        backgroundColor: 'red', 
        data: [2,2,2,2] 
    }, 
    { 
        label: 'UI Minor', 
        backgroundColor: 'blue', 
        data: [2,2,2,2] 
    }, 
    { 
        label: 'Functional Major', 
        backgroundColor: 'green', 
        data: [2,2,2,2] 
    }, 
    { 
        label: 'Functional Minor', 
        backgroundColor: 'pink', 
        data: [2,2,2,2] 
    } 
        ] 
    }; 

    this.chart = new Chart(htmlRef1, { 
    type: 'horizontalBar', 
    data: horizontalBarChartData, 
    options: { 
      scales: { 
            xAxes: [{ 
              // stacked: true, 
              display: true 
            }], 
            yAxes: [{ 
              // stacked: true, 
              display: true 
            }], 
          }, 
      responsive: true, 
      legend: { 
        position: 'right', 
        display: true 
        }, 
      title: { 
        display: true, 
        text: 'Functional and UI issues details' 
        } 
      } 
    }); 
} 
public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }
}