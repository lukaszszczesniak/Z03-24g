import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AirQualityForecastService } from './api/airQualityForecast.service';
import { AlertsService } from './api/alerts.service';
import { BulkDownloadsService } from './api/bulkDownloads.service';
import { Class120HourHourlyForecastService } from './api/class120HourHourlyForecast.service';
import { Class16DayDailyForecastService } from './api/class16DayDailyForecast.service';
import { Class5Day3HourForecastService } from './api/class5Day3HourForecast.service';
import { CurrentAirQualityService } from './api/currentAirQuality.service';
import { CurrentWeatherDataService } from './api/currentWeatherData.service';
import { DailyHistoricalWeatherDataService } from './api/dailyHistoricalWeatherData.service';
import { ForecastDegreeDayAPIService } from './api/forecastDegreeDayAPI.service';
import { ForecastSolarIrradianceAPIService } from './api/forecastSolarIrradianceAPI.service';
import { HistoricalAirQualityService } from './api/historicalAirQuality.service';
import { HistoricalDegreeDayAPIService } from './api/historicalDegreeDayAPI.service';
import { HistoricalSolarIrradianceAPIService } from './api/historicalSolarIrradianceAPI.service';
import { HistoricalWeatherEnergyAPIService } from './api/historicalWeatherEnergyAPI.service';
import { HourlyHistoricalWeatherDataService } from './api/hourlyHistoricalWeatherData.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
