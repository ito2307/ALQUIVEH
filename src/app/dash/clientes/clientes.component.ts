import { Component, OnInit, Output } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Observable } from 'rxjs';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  datos: any;
  p;
  totalRec;
  busqueda;
  constructor(private myfsql:ClientesService) { }

  ngOnInit() {
    this.listar();
  }


  listar(){
    this.myfsql.listar_datos().subscribe(res=>{
      console.log('Encontrado:', res);

      this.datos=res;
      this.totalRec=res.length;
      this.datos.map(fila=>fila.texto_buscable= fila.nombre +" "+ fila.apellidos+" "+fila.nro_doc)
      console.log(this.datos);

    });
  }



  eliminar(id) {
    this.myfsql.eliminar_item(id).subscribe(res => {
      this.listar();
    });
  }
}
