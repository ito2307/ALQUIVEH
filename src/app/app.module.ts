import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { routerConfig } from './router.config';
import { firebaseConfig } from '../environments/firebase.config';
import { LoginComponent } from './acceso/login/login.component';
import { MarcasService } from './servicios/marcas.service';
import { UsuariosService } from './servicios/usuarios.service';
import { VehiculosService } from './servicios/vehiculos.service';
import { ClientesService } from './servicios/clientes.service';
import { AlquileresService } from './servicios/alquileres.service';
import { DashComponent } from './dash/dash.component';
import { RegistrarComponent } from './acceso/registrar/registrar.component';
import { VehiculosComponent } from './dash/vehiculos/vehiculos.component';
import { ClientesComponent } from './dash/clientes/clientes.component';
import { AlquileresComponent } from './dash/alquileres/alquileres.component';
import { ClientesRegistrarComponent } from './dash/clientes/clientes-registrar/clientes-registrar.component';
import { TituloSeccionModule } from './shared/titulo-seccion/titulo-seccion.module';
import { ClientesEditarComponent } from './dash/clientes/clientes-editar/clientes-editar.component';
import { VehiculosRegistrarComponent } from './dash/vehiculos/vehiculos-registrar/vehiculos-registrar.component';
import { VehiculosEditarComponent } from './dash/vehiculos/vehiculos-editar/vehiculos-editar.component';
import { AlquileresEditarComponent } from './dash/alquileres/alquileres-editar/alquileres-editar.component';
import { AlquileresRegistrarComponent } from './dash/alquileres/alquileres-registrar/alquileres-registrar.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { MisPipesModule } from './pipes/mis-pipes.module';
import { UsuariosComponent } from './dash/usuarios/usuarios.component';
import { InicioComponent } from './dash/inicio/inicio.component';
import { DashClienteComponent } from './dash-cliente/dash-cliente.component';
import { MisAlquileresComponent } from './dash/mis-alquileres/mis-alquileres.component';
import { AlquilarComponent } from './dash/mis-alquileres/alquilar/alquilar.component';
import { FuncionesService } from './servicios/funciones.service';
import { UsuariosEditarComponent } from './dash/usuarios/usuarios-editar/usuarios-editar.component';
import { UsuariosRegistrarComponent } from './dash/usuarios/usuarios-registrar/usuarios-registrar.component';
import { FuncionesSweetalert2Service } from './servicios/funciones-sweetalert2.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    RegistrarComponent,
    VehiculosComponent,
    ClientesComponent,
    AlquileresComponent,
    ClientesRegistrarComponent,
    ClientesEditarComponent,
    VehiculosRegistrarComponent,
    VehiculosEditarComponent,
    AlquileresEditarComponent,
    AlquileresRegistrarComponent,
    UsuariosComponent,
    InicioComponent,
    DashClienteComponent,
    MisAlquileresComponent,
    AlquilarComponent,
    UsuariosEditarComponent,
    UsuariosRegistrarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    TituloSeccionModule,
    NgxPaginationModule,
    MisPipesModule

  ],
  providers: [MarcasService, AlquileresService, ClientesService, UsuariosService, VehiculosService, FuncionesService,FuncionesSweetalert2Service],
  bootstrap: [AppComponent],
})
export class AppModule { }
