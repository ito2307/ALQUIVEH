import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../servicios/clientes.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-editar',
  templateUrl: '../clientes-registrar/clientes-registrar.component.html'
})
export class ClientesEditarComponent implements OnInit {
  ruta="/dash/clientes";


  item = {
    $key:null,
    _id: null,
    nombre: null,
    apellidos: null,
    nro_doc: null,
    correo:null,
    clave:null

  }


  constructor(private fmysql: ClientesService,private state:ActivatedRoute,private _route:Router) { }

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
