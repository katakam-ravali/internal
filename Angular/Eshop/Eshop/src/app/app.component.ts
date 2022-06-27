import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eshop';
  data:any;
  data1:any;
  temp:any;
  constructor(private wservice:WeatherService){}
  getWeather()
  {
    this.wservice.getWeather().subscribe((data: any)=>{
      this.data1=data;
      this.temp=this.data1.main.temp;
      console.log(this.data.main.temp)
    })
  }
}
