import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresRegistrarComponent } from './alquileres-registrar.component';

describe('AlquileresRegistrarComponent', () => {
  let component: AlquileresRegistrarComponent;
  let fixture: ComponentFixture<AlquileresRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
