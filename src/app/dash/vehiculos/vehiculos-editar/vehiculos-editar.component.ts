import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehiculos } from '../../../interfaces/vehiculos';

@Component({
  selector: 'app-vehiculos-editar',
  templateUrl: '../vehiculos-registrar/vehiculos-registrar.component.html'
})
export class VehiculosEditarComponent implements OnInit {

  editable = true;
  ruta = '/dash/vehiculos';

  item = {
    $key: null,
    _id: null,
    nombre: null,
    marca: null,
    color: null,
    placa: null,
    kilometraje: null,
    precio: null,
    disponible: true
  };

  constructor(private fmysql: VehiculosService, private _route: Router, private state: ActivatedRoute) { }

  ngOnInit() {
    this.fmysql.buscar_item(this.state.snapshot.params.id).subscribe(res => {
      this.item = res;
    });
  }

  guardar() {
    this.fmysql.modificar_item(this.item.$key, this.item).subscribe(res=>{
      this._route.navigate([this.ruta]);
    });
  }

}
