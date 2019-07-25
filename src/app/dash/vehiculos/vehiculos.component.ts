import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiculosService } from '../../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  datos: any;
  p;
  totalRec;
  busqueda;
  constructor(private myfsql: VehiculosService) { }

  ngOnInit() {
    this.listar();
  }


  listar() {
    this.myfsql.listar_datos().subscribe(res => {
      console.log('Encontrado:', res);

      this.datos = res;
      this.totalRec = res.length;
      this.datos.map(fila => fila.texto_buscable = '' + fila.nombre);
      console.log(this.datos);

    });
  }

  eliminar(id) {
    this.myfsql.eliminar_item(id).subscribe(res => {
      this.listar();
    });
  }

}
