import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiModule, Configuration, ConfigurationParameters } from '@backend/api';
import {HttpClientModule} from '@angular/common/http';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    credentials: {['apiKey']: () => 'd4521523edef41bf8c1ea6465885ca92'},
    withCredentials: true
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
