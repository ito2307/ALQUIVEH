import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashClienteComponent } from './dash-cliente.component';

describe('DashClienteComponent', () => {
  let component: DashClienteComponent;
  let fixture: ComponentFixture<DashClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
