import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../../interfaces/usuarios';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent implements OnInit {

  ruta="/dash/usuarios";

  item: Usuarios = {
    _id: null,
    usuario: null,
    clave: null,
    nombre: null

  }

  constructor(private fmysql: UsuariosService,private _route:Router) { }

  ngOnInit() { }


  guardar() {
    this.item._id=Date.now();
    this.fmysql.registrar_item(this.item).subscribe(rest => {
      console.log("guardando",rest)
      this._route.navigate([this.ruta]);

    });
  }

}
