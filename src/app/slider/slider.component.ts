import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegarHaciaCards(){
    this.router.navigate(['/cards']);
  }
  navegarHaciaSlider(){
    this.router.navigate(['/slider']);
  }
  navegarHaciaPelicula1(){
    this.router.navigate(['/pelicula1']);
  }
  navegarHaciaPelicula2(){
    this.router.navigate(['/pelicula2']);
  }
  navegarHaciaPelicula3(){
    this.router.navigate(['/pelicula3']);
  }
}
