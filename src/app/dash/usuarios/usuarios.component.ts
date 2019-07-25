import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datos:any;
  p;
  totalRec;
  busqueda;
  constructor(private myfsql:UsuariosService) { }

  ngOnInit() {
    this.listar();
  }


  listar(){
    this.myfsql.listar_datos().subscribe(res=>{
      console.log('Encontrado:', res);

      this.datos=res;
      this.totalRec=res.length;
      this.datos.map(fila=>fila.texto_buscable=fila.usuario+" "+fila.nombre)
      console.log(this.datos);

    });


  }





  eliminar(id) {
    this.myfsql.eliminar_item(id).subscribe(res => {
      this.listar();
    });
  }

}
