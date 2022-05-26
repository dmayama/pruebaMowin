import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pelicula2',
  templateUrl: './info-pelicula2.component.html',
  styleUrls: ['./info-pelicula2.component.css']
})
export class InfoPelicula2Component implements OnInit {

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
