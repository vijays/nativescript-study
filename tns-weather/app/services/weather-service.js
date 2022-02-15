"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require("rxjs/Rx");
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getWeather = function (_city) {
        return this._http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + _city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            alert(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather-service.js.map