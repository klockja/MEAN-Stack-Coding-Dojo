import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityBurbankComponent } from './city-burbank/city-burbank.component';
import { CitySeattleComponent } from './city-seattle/city-seattle.component';
import { CityDallasComponent } from './city-dallas/city-dallas.component';
import { CitySanJoseComponent } from './city-sanjose/city-sanjose.component';
import { CityDcComponent } from './city-dc/city-dc.component';
import { CityChicagoComponent } from './city-chicago/city-chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    CityBurbankComponent,
    CitySeattleComponent,
    CityDallasComponent,
    CitySanJoseComponent,
    CityDcComponent,
    CityChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
