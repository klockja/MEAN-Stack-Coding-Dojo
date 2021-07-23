import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitySeattleComponent } from './city-seattle/city-seattle.component';
import { CitySanJoseComponent } from './city-sanjose/city-sanjose.component';
import { CityBurbankComponent } from './city-burbank/city-burbank.component';
import { CityDallasComponent } from './city-dallas/city-dallas.component';
import { CityDcComponent } from './city-dc/city-dc.component';
import { CityChicagoComponent } from './city-chicago/city-chicago.component';

const routes: Routes = [
  { path: 'burbank', component: CityBurbankComponent },
  { path: 'chicago', component: CityChicagoComponent },
  { path: 'dallas', component: CityDallasComponent },
  { path: 'dc', component: CityDcComponent },
  { path: 'sanjose', component: CitySanJoseComponent },
  { path: 'seattle', component: CitySeattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
