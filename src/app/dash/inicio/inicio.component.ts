import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { AlquileresService } from '../../servicios/alquileres.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  vehiculos;
  clientes;
  usuarios;
  alquileres;
  constructor(private vehi:VehiculosService,private alqui:AlquileresService,private usu:UsuariosService,private clien:ClientesService) { }

  ngOnInit() {
    this.listar_vehiculos();
    this.listar_alquileres();
    this.listar_usuarios();
    this.listar_clientes();
  }




  listar_vehiculos(){
    this.vehi.listar_datos().subscribe(res=>{
      this.vehiculos=res.length;
    });
  }
  listar_clientes(){
    this.clien.listar_datos().subscribe(res=>{
      this.clientes=res.length;
    });
  }
  listar_usuarios(){
    this.usu.listar_datos().subscribe(res=>{
      this.usuarios=res.length;
    });
  }
  listar_alquileres(){
    this.alqui.listar_datos().subscribe(res=>{
      this.alquileres=res.length;
    });
  }

}
