import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPelicula2Component } from './info-pelicula2.component';

describe('InfoPelicula2Component', () => {
  let component: InfoPelicula2Component;
  let fixture: ComponentFixture<InfoPelicula2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPelicula2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPelicula2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
