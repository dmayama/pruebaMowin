import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPelicula3Component } from './info-pelicula3.component';

describe('InfoPelicula3Component', () => {
  let component: InfoPelicula3Component;
  let fixture: ComponentFixture<InfoPelicula3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPelicula3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPelicula3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
