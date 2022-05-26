import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  navegarHaciaSlider(){
    this.router.navigate(['/slider']);
  }
  navegarHaciaCards(){
    this.router.navigate(['/cards']);
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
