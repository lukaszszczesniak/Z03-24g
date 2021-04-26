/**
 * Weatherbit.io - Swagger UI Weather API documentation
 * This is the documentation for the Weatherbit Weather API.  The base URL for the API is [http://api.weatherbit.io/v2.0/](http://api.weatherbit.io/v2.0/) or [https://api.weatherbit.io/v2.0/](http://api.weatherbit.io/v2.0/). Below is the Swagger UI documentation for the API. All API requests require the `key` parameter.        An Example for a 5 day forecast for London, UK would be `http://api.weatherbit.io/v2.0/forecast/3hourly?city=London`&`country=UK`. See our [Weather API description page](https://www.weatherbit.io/api) for additional documentation.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { EnergyObsGroupForecast } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ForecastDegreeDayAPIService {

    protected basePath = 'https://api.weatherbit.io/v2.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Returns Energy Forecast API response  - Given a single lat/lon. 
     * Retrieve an 8 day forecast relevant to te Energy Sector (degree days, solar radiation, precipitation, wind).
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param key Your registered API key.
     * @param threshold Temperature threshold to use to calculate degree days (default 18 C) 
     * @param units Convert to units. Default Metric See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;units field description&lt;/a&gt;
     * @param tp Time period (default: daily)
     * @param callback Wraps return in jsonp callback. Example: callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forecastEnergylatlatlonlonGet(lat: number, lon: number, key: string, threshold?: number, units?: 'S' | 'I', tp?: 'hourly' | 'daily', callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EnergyObsGroupForecast>;
    public forecastEnergylatlatlonlonGet(lat: number, lon: number, key: string, threshold?: number, units?: 'S' | 'I', tp?: 'hourly' | 'daily', callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EnergyObsGroupForecast>>;
    public forecastEnergylatlatlonlonGet(lat: number, lon: number, key: string, threshold?: number, units?: 'S' | 'I', tp?: 'hourly' | 'daily', callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EnergyObsGroupForecast>>;
    public forecastEnergylatlatlonlonGet(lat: number, lon: number, key: string, threshold?: number, units?: 'S' | 'I', tp?: 'hourly' | 'daily', callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (lat === null || lat === undefined) {
            throw new Error('Required parameter lat was null or undefined when calling forecastEnergylatlatlonlonGet.');
        }
        if (lon === null || lon === undefined) {
            throw new Error('Required parameter lon was null or undefined when calling forecastEnergylatlatlonlonGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling forecastEnergylatlatlonlonGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (threshold !== undefined && threshold !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>threshold, 'threshold');
        }
        if (units !== undefined && units !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>units, 'units');
        }
        if (tp !== undefined && tp !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>tp, 'tp');
        }
        if (callback !== undefined && callback !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>callback, 'callback');
        }
        if (key !== undefined && key !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>key, 'key');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<EnergyObsGroupForecast>(`${this.configuration.basePath}/forecast/energy?lat=${encodeURIComponent(String(lat))}&lon=${encodeURIComponent(String(lon))}`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
