import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightComponent } from './flights/flight/flight.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightService } from './shared/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
