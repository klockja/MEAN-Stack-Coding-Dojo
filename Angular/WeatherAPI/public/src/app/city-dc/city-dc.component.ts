import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-dc',
  templateUrl: './city-dc.component.html',
  styleUrls: ['./city-dc.component.scss']
})
export class CityDcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCityData('washington dc');
  }

  weather: any;
  getCityData(city) {
    const observable = this._httpService.getCity(city);
    observable.subscribe(data => {
      console.log("Got weather data: " + data)
      this.weather = data;
    });
  }
}
