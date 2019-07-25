import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../../../interfaces/usuarios';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: '../usuarios-registrar/usuarios-registrar.component.html',
})
export class UsuariosEditarComponent implements OnInit {

  ruta="/dash/usuarios";


  item = {
    $key: null,
    _id: null,
    usuario: null,
    clave: null,
    nombre: null

  }


  constructor(private fmysql: UsuariosService,private state:ActivatedRoute,private _route:Router) { }





  ngOnInit() {
    this.fmysql.buscar_item(this.state.snapshot.params.id).subscribe(res => {
      this.item = res;
    });
  }

  guardar() {
    this.fmysql.modificar_item(this.item.$key, this.item).subscribe(snap=>{
      this._route.navigate([this.ruta]);
    });
  }




}
