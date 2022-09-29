import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { EventosComponent } from './eventos/eventos.component';
import { ServiceEventos } from './eventos/service-eventos.service';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';


@NgModule({
  declarations: [
    AppComponent,
      EventosComponent,
      PalestrantesComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),

  ],
  providers: [ServiceEventos],
  bootstrap: [AppComponent]
})
export class AppModule { }
