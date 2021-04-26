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

import { ForecastDay } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class Class16DayDailyForecastService {

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
     * Returns a daily forecast - Given a City ID.
     * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \&quot;YYYY-MM-DD\&quot;. One day begins at 00:00 UTC, and ends at 23:59 UTC. 
     * @param cityId City ID. Example: 4487042
     * @param key Your registered API key.
     * @param days Number of days to return. Default 16.
     * @param units Convert to units. Default Metric See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;units field description&lt;/a&gt;
     * @param lang Language (Default: English) See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;language field description&lt;/a&gt;
     * @param callback Wraps return in jsonp callback. Example: callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forecastDailycityIdcityIdGet(cityId: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ForecastDay>;
    public forecastDailycityIdcityIdGet(cityId: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ForecastDay>>;
    public forecastDailycityIdcityIdGet(cityId: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ForecastDay>>;
    public forecastDailycityIdcityIdGet(cityId: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (cityId === null || cityId === undefined) {
            throw new Error('Required parameter cityId was null or undefined when calling forecastDailycityIdcityIdGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling forecastDailycityIdcityIdGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (days !== undefined && days !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>days, 'days');
        }
        if (units !== undefined && units !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>units, 'units');
        }
        if (lang !== undefined && lang !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>lang, 'lang');
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

        return this.httpClient.get<ForecastDay>(`${this.configuration.basePath}/forecast/daily?city_id=${encodeURIComponent(String(cityId))}`,
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
     * Returns a daily forecast - Given City and/or State, Country.
     * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \&quot;YYYY-MM-DD\&quot;. One day begins at 00:00 UTC, and ends at 23:59 UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. 
     * @param city City search.. Example - &amp;city&#x3D;Raleigh,NC or &amp;city&#x3D;Berlin,DE or city&#x3D;Paris&amp;country&#x3D;FR
     * @param country Country Code (2 letter).
     * @param key Your registered API key.
     * @param state Full name of state.
     * @param days Number of days to return. Default 16.
     * @param units Convert to units. Default Metric See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;units field description&lt;/a&gt;
     * @param lang Language (Default: English) See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;language field description&lt;/a&gt;
     * @param callback Wraps return in jsonp callback. Example - callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forecastDailycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ForecastDay>;
    public forecastDailycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ForecastDay>>;
    public forecastDailycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ForecastDay>>;
    public forecastDailycitycitycountrycountryGet(city: string, country: string, key: string, state?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (city === null || city === undefined) {
            throw new Error('Required parameter city was null or undefined when calling forecastDailycitycitycountrycountryGet.');
        }
        if (country === null || country === undefined) {
            throw new Error('Required parameter country was null or undefined when calling forecastDailycitycitycountrycountryGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling forecastDailycitycitycountrycountryGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (state !== undefined && state !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>state, 'state');
        }
        if (days !== undefined && days !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>days, 'days');
        }
        if (units !== undefined && units !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>units, 'units');
        }
        if (lang !== undefined && lang !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>lang, 'lang');
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

        return this.httpClient.get<ForecastDay>(`${this.configuration.basePath}/forecast/daily?city=${encodeURIComponent(String(city))}&country=${encodeURIComponent(String(country))}`,
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
     * Returns a daily forecast - Given Lat/Lon.
     * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \&quot;YYYY-MM-DD\&quot;. One day begins at 00:00 UTC, and ends at 23:59 UTC.  
     * @param lat Latitude component of location.
     * @param lon Longitude component of location.
     * @param key Your registered API key.
     * @param days Number of days to return. Default 16.
     * @param units Convert to units. Default Metric See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;units field description&lt;/a&gt;
     * @param lang Language (Default: English) See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;language field description&lt;/a&gt;
     * @param callback Wraps return in jsonp callback. Example: callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forecastDailylatlatlonlonGet(lat: number, lon: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ForecastDay>;
    public forecastDailylatlatlonlonGet(lat: number, lon: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ForecastDay>>;
    public forecastDailylatlatlonlonGet(lat: number, lon: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ForecastDay>>;
    public forecastDailylatlatlonlonGet(lat: number, lon: number, key: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (lat === null || lat === undefined) {
            throw new Error('Required parameter lat was null or undefined when calling forecastDailylatlatlonlonGet.');
        }
        if (lon === null || lon === undefined) {
            throw new Error('Required parameter lon was null or undefined when calling forecastDailylatlatlonlonGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling forecastDailylatlatlonlonGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (days !== undefined && days !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>days, 'days');
        }
        if (units !== undefined && units !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>units, 'units');
        }
        if (lang !== undefined && lang !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>lang, 'lang');
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

        return this.httpClient.get<ForecastDay>(`${this.configuration.basePath}/forecast/daily?lat=${encodeURIComponent(String(lat))}&lon=${encodeURIComponent(String(lon))}`,
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
     * Returns a daily forecast - Given a Postal Code.
     * Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \&quot;YYYY-MM-DD\&quot;. One day begins at 00:00 UTC, and ends at 23:59 UTC. 
     * @param postalCode Postal Code. Example: 28546
     * @param key Your registered API key.
     * @param country Country Code (2 letter).
     * @param days Number of days to return. Default 16.
     * @param units Convert to units. Default Metric See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;units field description&lt;/a&gt;
     * @param lang Language (Default: English) See &lt;a target&#x3D;\&#39;blank\&#39; href&#x3D;\&#39;/api/requests\&#39;&gt;language field description&lt;/a&gt;
     * @param callback Wraps return in jsonp callback. Example: callback&#x3D;func
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forecastDailypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ForecastDay>;
    public forecastDailypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ForecastDay>>;
    public forecastDailypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ForecastDay>>;
    public forecastDailypostalCodepostalCodeGet(postalCode: number, key: string, country?: string, days?: number, units?: 'S' | 'I', lang?: 'ar' | 'az' | 'be' | 'bg' | 'bs' | 'ca' | 'cs' | 'de' | 'fi' | 'fr' | 'el' | 'es' | 'et' | 'hr' | 'hu' | 'id' | 'it' | 'is' | 'kw' | 'nb' | 'nl' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'tr' | 'uk' | 'zh' | 'zh-tw', callback?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (postalCode === null || postalCode === undefined) {
            throw new Error('Required parameter postalCode was null or undefined when calling forecastDailypostalCodepostalCodeGet.');
        }
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling forecastDailypostalCodepostalCodeGet.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (country !== undefined && country !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>country, 'country');
        }
        if (days !== undefined && days !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>days, 'days');
        }
        if (units !== undefined && units !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>units, 'units');
        }
        if (lang !== undefined && lang !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>lang, 'lang');
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

        return this.httpClient.get<ForecastDay>(`${this.configuration.basePath}/forecast/daily?postal_code=${encodeURIComponent(String(postalCode))}`,
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
