import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../../servicios/funciones.service';
import { ClientesService } from '../../servicios/clientes.service';
import { AlquileresService } from '../../servicios/alquileres.service';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit {

  dataList: Observable<any[]>;

  constructor(private fvehi: VehiculosService, private funciones: FuncionesService, private fcliente: ClientesService,
    private falquiler: AlquileresService) { }

  ngOnInit() {
    this.dataList = this.falquiler.listar_datos();
  }

}
