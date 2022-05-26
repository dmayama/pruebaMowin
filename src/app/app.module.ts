import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { InfoPelicula1Component } from './info-pelicula1/info-pelicula1.component';
import { InfoPelicula2Component } from './info-pelicula2/info-pelicula2.component';
import { InfoPelicula3Component } from './info-pelicula3/info-pelicula3.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardsComponent,
    InfoPelicula1Component,
    InfoPelicula2Component,
    InfoPelicula3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
