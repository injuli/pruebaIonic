import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarGpxPage } from './cargar-gpx.page';

describe('CargarGpxPage', () => {
  let component: CargarGpxPage;
  let fixture: ComponentFixture<CargarGpxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarGpxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarGpxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
