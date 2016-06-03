import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import LabelModule = require("ui/label");

import {WeatherService} from './services/weather-service';

@Component({
    selector: 'my-app',
    templateUrl: './app.html',
    providers: [WeatherService]
})
export class AppComponent {
    
    _city: string;
    _location: string;
    _temperature_in_f: string;
    _temperature_in_c: string;
    _condition: string;
    
    constructor(private _weatherService: WeatherService){}
     
    onSubmit(){
        this._weatherService.getWeather(this._city)
            .subscribe(
                data => {
                    this._location = data.query.results.channel.title,
                    this._temperature_in_f = data.query.results.channel.item.condition.temp,
                    this._temperature_in_c = " - " + this._FtoC( parseInt(this._temperature_in_f)) + "\xB0 C";
                    this._condition = data.query.results.channel.item.condition.text
                }
            );
    }
    
    //Yahoo! API's where clause with "and u='c'" is not working, hence,
    //This function converts Fahrenheit to Celcius
    
    _FtoC(temp) {
        return   ""+ Math.round(((temp - 32) * 5 / 9));
    }
}