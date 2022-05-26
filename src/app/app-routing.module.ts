import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { InfoPelicula1Component } from './info-pelicula1/info-pelicula1.component';
import { InfoPelicula2Component } from './info-pelicula2/info-pelicula2.component';
import { InfoPelicula3Component } from './info-pelicula3/info-pelicula3.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  {path:'', redirectTo:'/cards', pathMatch: 'full'},
  {path:'slider', component: SliderComponent},
  {path:'cards', component: CardsComponent},
  {path:'pelicula1', component: InfoPelicula1Component},
  {path:'pelicula2', component: InfoPelicula2Component},
  {path:'pelicula3', component: InfoPelicula3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
