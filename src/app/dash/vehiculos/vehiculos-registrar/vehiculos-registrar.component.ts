import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../../../interfaces/vehiculos';
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos-registrar',
  templateUrl: './vehiculos-registrar.component.html',
  styleUrls: ['./vehiculos-registrar.component.css']
})
export class VehiculosRegistrarComponent implements OnInit {
  ruta = '/dash/vehiculos';
  editable = false;

  item: Vehiculos = {
    _id: null,
    nombre: null,
    marca: null,
    color: null,
    placa: null,
    kilometraje: null,
    precio: null
  };
  constructor(private fmysql: VehiculosService, private _route: Router) { }

  ngOnInit() { }


  guardar() {
    this.item._id = Date.now();
    this.fmysql.registrar_item(this.item).subscribe(res => {
      console.log('guardar-->', res);
      this._route.navigate([this.ruta]);

    });
  }

}
