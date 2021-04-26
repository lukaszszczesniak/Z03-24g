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


export interface EnergyObs { 
    /**
     * City name (closest)
     */
    city_name?: string;
    /**
     * State abbreviation
     */
    state_code?: string;
    /**
     * Country abbreviation
     */
    country_code?: string;
    /**
     * Local IANA time zone
     */
    timezone?: string;
    /**
     * Latitude
     */
    lat?: string;
    /**
     * Longitude
     */
    lon?: string;
    /**
     * Source Station ID
     */
    station_id?: string;
    /**
     * Cooling degree days
     */
    cdd?: number;
    /**
     * Heating degree days
     */
    hdd?: number;
    /**
     * Average Relative humidity (%)
     */
    rh?: number;
    /**
     * Average dew point temperature - Default (C)
     */
    dewpt?: number;
    /**
     * Average wind direction (Degrees)
     */
    wind_dir?: number;
    /**
     * Average wind speed - Default (m/s)
     */
    wind_speed?: number;
    /**
     * Average temperature - Default (C)
     */
    temp?: number;
    /**
     * Average cloud cover (%)
     */
    clouds?: number;
    /**
     * Total global horizontal solar irradiance (W/m^2)
     */
    t_ghi?: number;
    /**
     * Total diffuse horizontal solar irradiance (W/m^2)
     */
    t_dhi?: number;
    /**
     * Total direct normal solar irradiance (W/m^2)
     */
    t_dni?: number;
    /**
     * Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2
     */
    sun_hours?: number;
    /**
     * Total precipitation in period - Default (mm)
     */
    precip?: number;
    /**
     * Total snowfall in period - Default (mm)
     */
    snow?: number;
}

