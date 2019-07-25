import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { Clientes } from '../../interfaces/clientes';
import { ClientesService } from '../../servicios/clientes.service';
import { FuncionesSweetalert2Service } from '../../servicios/funciones-sweetalert2.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']

})
export class RegistrarComponent implements OnInit {

  ruta="/acceso";


  item: Clientes = {
    _id: null,
    nombre: null,
    apellidos: null,
    nro_doc: null,
    correo:null,
    clave:null
  }

  constructor(private fmysql: ClientesService,private _route:Router,private alerta:FuncionesSweetalert2Service) { }

  ngOnInit() { }


  guardar() {
    this.item._id=Date.now();
    this.fmysql.registrar_item(this.item).subscribe(rest => {
      console.log("guardando",rest)
      this.alerta.registrar();
      this._route.navigate([this.ruta]);

    });
  }

}
