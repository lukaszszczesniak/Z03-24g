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

import { AQCurrentGroup } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class HistoricalAirQualityService {

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
     * Returns 72 hours of historical air quality conditions - Given a City ID.
     * Returns historical air quality conditions.
     * @param cityId City ID.
     * @param key Your registered API key.
     * @param callback Wraps return in jsonp callback. Example - callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public historyAirqualitycityIdcityIdGet(cityId: number, key: string, callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<AQCurrentGroup>;
    public historyAirqualitycityIdcityIdGet(cityId: number, key: string, callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<AQCurrentGroup>>;
    public historyAirqualitycityIdcityIdGet(cityId: number, key: string, callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<AQCurrentGroup>>;
    public historyAirqualitycityIdcityIdGet(cityId: number, key: string, callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (cityId === null || cityId === undefined) {
            throw new Error('Required parameter cityId was null or undefined when calling historyAirqualitycityIdcityIdGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling historyAirqualitycityIdcityIdGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
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

        return this.httpClient.get<AQCurrentGroup>(`${this.configuration.basePath}/history/airquality?city_id=${encodeURIComponent(String(cityId))}`,
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

    /**
     * Returns 72 hours of historical quality conditions - Given City and/or State, Country.
     * Returns historical air quality conditions.
     * @param city City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR
     * @param country Country Code (2 letter).
     * @param key Your registered API key.
     * @param state Full name of state.
     * @param callback Wraps return in jsonp callback. Example: callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public historyAirqualitycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<AQCurrentGroup>;
    public historyAirqualitycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<AQCurrentGroup>>;
    public historyAirqualitycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<AQCurrentGroup>>;
    public historyAirqualitycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (city === null || city === undefined) {
            throw new Error('Required parameter city was null or undefined when calling historyAirqualitycitycitycountrycountryGet.');
        }
        if (country === null || country === undefined) {
            throw new Error('Required parameter country was null or undefined when calling historyAirqualitycitycitycountrycountryGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling historyAirqualitycitycitycountrycountryGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (state !== undefined && state !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>state, 'state');
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

        return this.httpClient.get<AQCurrentGroup>(`${this.configuration.basePath}/history/airquality?city=${encodeURIComponent(String(city))}&country=${encodeURIComponent(String(country))}`,
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

    /**
     * Returns 72 hours of historical air quality conditions - Given a lat/lon.
     * Returns historical air quality conditions.
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param key Your registered API key.
     * @param callback Wraps return in jsonp callback. Example - callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public historyAirqualitylatlatlonlonGet(lat: number, lon: number, key: string, callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<AQCurrentGroup>;
    public historyAirqualitylatlatlonlonGet(lat: number, lon: number, key: string, callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<AQCurrentGroup>>;
    public historyAirqualitylatlatlonlonGet(lat: number, lon: number, key: string, callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<AQCurrentGroup>>;
    public historyAirqualitylatlatlonlonGet(lat: number, lon: number, key: string, callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (lat === null || lat === undefined) {
            throw new Error('Required parameter lat was null or undefined when calling historyAirqualitylatlatlonlonGet.');
        }
        if (lon === null || lon === undefined) {
            throw new Error('Required parameter lon was null or undefined when calling historyAirqualitylatlatlonlonGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling historyAirqualitylatlatlonlonGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
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

        return this.httpClient.get<AQCurrentGroup>(`${this.configuration.basePath}/history/airquality?lat=${encodeURIComponent(String(lat))}&lon=${encodeURIComponent(String(lon))}`,
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

    /**
     * Returns 72 hours of historical air quality conditions - Given a Postal Code.
     * Returns historical air quality conditions.
     * @param postalCode Postal Code. Example: 28546
     * @param key Your registered API key.
     * @param country Country Code (2 letter).
     * @param callback Wraps return in jsonp callback. Example - callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public historyAirqualitypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<AQCurrentGroup>;
    public historyAirqualitypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<AQCurrentGroup>>;
    public historyAirqualitypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<AQCurrentGroup>>;
    public historyAirqualitypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (postalCode === null || postalCode === undefined) {
            throw new Error('Required parameter postalCode was null or undefined when calling historyAirqualitypostalCodepostalCodeGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling historyAirqualitypostalCodepostalCodeGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (country !== undefined && country !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>country, 'country');
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

        return this.httpClient.get<AQCurrentGroup>(`${this.configuration.basePath}/history/airquality?postal_code=${encodeURIComponent(String(postalCode))}`,
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
