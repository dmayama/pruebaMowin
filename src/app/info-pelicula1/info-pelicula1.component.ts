import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pelicula1',
  templateUrl: './info-pelicula1.component.html',
  styleUrls: ['./info-pelicula1.component.css']
})
export class InfoPelicula1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegarHaciaCards(){
    this.router.navigate(['/cards']);
  }
  navegarHaciaSlider(){
    this.router.navigate(['/slider']);
  }
}
