//tslint:disable
import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../../servicios/vehiculos.service';
import { Alquileres } from '../../../interfaces/alquileres';
import { FuncionesService } from '../../../servicios/funciones.service';
import { ClientesService } from '../../../servicios/clientes.service';
import { Vehiculos } from '../../../interfaces/vehiculos';
import { AlquileresService } from '../../../servicios/alquileres.service';
declare var $: any;

@Component({
  selector: 'app-alquilar',
  templateUrl: './alquilar.component.html',
  styleUrls: ['./alquilar.component.css']
})
export class AlquilarComponent implements OnInit {

  listado_vehiculos = [];

  alquiler: Alquileres = {
    _id: null,
    cliente: null,
    vehiculos: null,
    idcliente: null,
    idvehiculo: null,
    finicio: this.funciones.get_fecha_local().substr(0, 10),
    dias: null,
    ffinal: this.funciones.get_fecha_local().substr(0, 10),
    precio: null,
    pagado: true
  };

  vehisel: any = null;

  constructor(private fvehi: VehiculosService, private funciones: FuncionesService, private fcliente: ClientesService,
    private falquiler: AlquileresService) { }

  ngOnInit() {
    this.listar();
  }

  calcular() {
    this.alquiler.precio = this.alquiler.dias * this.vehisel.precio;
  }

  listar() {
    this.fvehi.buscar_campo('disponible', true).subscribe(res => {
      console.log('Encontrado:', res);
      this.listado_vehiculos = res;
      this.listado_vehiculos.filter(fila => fila.disponible != true || !fila.disponible);
      console.log(this.listado_vehiculos);
    });
  }

  mostrar_modal_alquiler(vehi) {
    this.vehisel = vehi;
    $('.modalAlquiler').modal('show');
  }

  confirmar_alquilar() {
    let iduser = Number(localStorage.getItem('vehi_iduser'));
    this.alquiler.idcliente = iduser;
    this.alquiler.idvehiculo = this.vehisel._id;
    this.fcliente.buscar_campo('_id', iduser).subscribe(res_cli => {
      let cliente = res_cli[0];
      this.alquiler.cliente = cliente;
      this.alquiler.vehiculos = this.vehisel;
      console.log('Alquilar:', this.alquiler);
      this.falquiler.registrar_item(this.alquiler).subscribe(res => {
        this.vehisel.disponible = false;
        this.fvehi.modificar_item(this.vehisel.$key, this.vehisel).subscribe(modi => {
          $('.modalAlquiler').modal('hide');
        });
      });
    });
  }

}
