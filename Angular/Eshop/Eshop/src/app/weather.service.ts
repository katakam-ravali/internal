import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http:HttpClient)
  {
  }
  getWeather() {
    return this.get<[]>('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=dd28abd04c32b8134674d7921d8a06fc'')
  }
}
