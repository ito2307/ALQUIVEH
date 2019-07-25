import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { FuncionesService } from '../../servicios/funciones.service';
import { ClientesService } from '../../servicios/clientes.service';
import { AlquileresService } from '../../servicios/alquileres.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-alquileres',
  templateUrl: './mis-alquileres.component.html',
  styleUrls: ['./mis-alquileres.component.css']
})
export class MisAlquileresComponent implements OnInit {

  dataList: Observable<any[]>;

  constructor(private fvehi: VehiculosService, private funciones: FuncionesService, private fcliente: ClientesService,
    private falquiler: AlquileresService) { }

  ngOnInit() {
    const iduser = Number(localStorage.getItem('vehi_iduser'));
    this.dataList = this.falquiler.buscar_alquileres_por_cliente(iduser);
  }

}
