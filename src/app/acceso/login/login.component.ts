//tslint:disable
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarcasService } from '../../servicios/marcas.service';
import { Router } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';
import { ListasSistema } from '../../servicios/listas-sistema';
import { UsuariosService } from '../../servicios/usuarios.service';
import { FuncionesSweetalert2Service } from '../../servicios/funciones-sweetalert2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipos_acceso = new ListasSistema().tipos_acceso;
  login = { tipo: 2, usuario: null, clave: null,correo:null };

  dataList: Observable<any[]>;

  constructor(private daoMarcas: MarcasService, private _route: Router, private fclientes: ClientesService,
    private fusuario: UsuariosService, private alerta: FuncionesSweetalert2Service) { }

  ngOnInit() {
    this.daoMarcas.registrar_item('123456789', {
      nombre: 'MiTest'
    }).subscribe(rest => {
      this.dataList = this.daoMarcas.listar_datos();
    });

    this.daoMarcas.buscar_item('-LjNmSWzg811AdNS-vHA').subscribe(res => {
      console.log('Encontrado:', res);
    });
  }

  editar(item) {
    this.daoMarcas.modificar_item(item.$key, {
      nombre: 'Modificado'
    });
  }

  eliminar(item) {
    this.daoMarcas.eliminar_item(item.$key).subscribe(res => {
      this.dataList = this.daoMarcas.listar_datos();
    });
  }


  loguear() {
    console.log(this.login);
    if (this.login.tipo == 1) {
      this.fusuario.buscar_usuario(this.login.usuario).subscribe(res => {
        console.log(res);
        if (res.length == 1) {
          let usuario = res[0];
          this.verificar_usuario(usuario);
        }
      });
    } else {
      this.fclientes.buscar_cliente(this.login.correo).subscribe(res => {
        console.log(res);
        if (res.length == 1) {
          let usuario = res[0];
          this.verificar_usuario(usuario);
        } else {
          this.alerta.acceso_erroneo();
        }
      });
    }
  }

  verificar_usuario(usuario) {
    if (usuario.clave == this.login.clave) {
      localStorage.setItem('vehi_acceso', '1');
      localStorage.setItem('vehi_iduser', usuario._id);
      localStorage.setItem('vehi_nivel', String(this.login.tipo));
      this.alerta.acceso_exitoso();
      if (this.login.tipo == 2) {
        this._route.navigate(['/dash/alquilar']);
      } else {
        this._route.navigate(['/dash']);
      }
    }
  }
}
