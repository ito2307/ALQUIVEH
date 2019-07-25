import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-registrar',
  templateUrl: './clientes-registrar.component.html',
  styleUrls: ['./clientes-registrar.component.css']
})
export class ClientesRegistrarComponent implements OnInit {


ruta="/dash/clientes";

  item: Clientes = {
    _id: null,
    nombre: null,
    apellidos: null,
    nro_doc: null,
    correo:null,
    clave:null
  }

  constructor(private fmysql: ClientesService,private _route:Router) { }

  ngOnInit() { }


  guardar() {
    this.item._id=Date.now();
    this.fmysql.registrar_item(this.item).subscribe(rest => {
      this._route.navigate([this.ruta]);

    });
  }




}
