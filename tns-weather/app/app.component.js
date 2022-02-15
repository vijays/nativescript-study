"use strict";
var core_1 = require('@angular/core');
var weather_service_1 = require('./services/weather-service');
var AppComponent = (function () {
    function AppComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this._weatherService.getWeather(this._city)
            .subscribe(function (data) {
            _this._location = data.query.results.channel.title,
                _this._temperature_in_f = data.query.results.channel.item.condition.temp,
                _this._temperature_in_c = " - " + _this._FtoC(parseInt(_this._temperature_in_f)) + "\xB0 C";
            _this._condition = data.query.results.channel.item.condition.text;
        });
    };
    //Yahoo! API's where clause with "and u='c'" is not working, hence,
    //This function converts Fahrenheit to Celcius
    AppComponent.prototype._FtoC = function (temp) {
        return "" + Math.round(((temp - 32) * 5 / 9));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.html',
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map