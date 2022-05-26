import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pelicula3',
  templateUrl: './info-pelicula3.component.html',
  styleUrls: ['./info-pelicula3.component.css']
})
export class InfoPelicula3Component implements OnInit {

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
