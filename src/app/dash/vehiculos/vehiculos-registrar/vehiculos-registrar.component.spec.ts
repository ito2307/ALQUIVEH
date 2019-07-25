import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosRegistrarComponent } from './vehiculos-registrar.component';

describe('VehiculosRegistrarComponent', () => {
  let component: VehiculosRegistrarComponent;
  let fixture: ComponentFixture<VehiculosRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
