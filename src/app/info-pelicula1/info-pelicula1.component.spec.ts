import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPelicula1Component } from './info-pelicula1.component';

describe('InfoPelicula1Component', () => {
  let component: InfoPelicula1Component;
  let fixture: ComponentFixture<InfoPelicula1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPelicula1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPelicula1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
