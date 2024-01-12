import { Component } from '@angular/core';
import { WeatherService, WeatherInt } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherApp';
  resp?: WeatherInt;
  constructor(private weatherService:WeatherService){
    this.weatherService.getWeatherData().subscribe(data=>{
      console.log(data)
      this.resp = data;
     
    })
  }
}
