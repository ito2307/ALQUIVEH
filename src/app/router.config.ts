import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './acceso/login/login.component';
import { DashComponent } from './dash/dash.component';
import { AlquileresComponent } from './dash/alquileres/alquileres.component';
import { ClientesComponent } from './dash/clientes/clientes.component';
import { VehiculosComponent } from './dash/vehiculos/vehiculos.component';
import { ClientesRegistrarComponent } from './dash/clientes/clientes-registrar/clientes-registrar.component';
import { ClientesEditarComponent } from './dash/clientes/clientes-editar/clientes-editar.component';
import { VehiculosEditarComponent } from './dash/vehiculos/vehiculos-editar/vehiculos-editar.component';
import { VehiculosRegistrarComponent } from './dash/vehiculos/vehiculos-registrar/vehiculos-registrar.component';
import { AlquileresEditarComponent } from './dash/alquileres/alquileres-editar/alquileres-editar.component';
import { AlquileresRegistrarComponent } from './dash/alquileres/alquileres-registrar/alquileres-registrar.component';
import { RegistrarComponent } from './acceso/registrar/registrar.component';
import { UsuariosComponent } from './dash/usuarios/usuarios.component';
import { InicioComponent } from './dash/inicio/inicio.component';
import { MisAlquileresComponent } from './dash/mis-alquileres/mis-alquileres.component';
import { AlquilarComponent } from './dash/mis-alquileres/alquilar/alquilar.component';
import { UsuariosEditarComponent } from './dash/usuarios/usuarios-editar/usuarios-editar.component';
import { UsuariosRegistrarComponent } from './dash/usuarios/usuarios-registrar/usuarios-registrar.component';


export const routerConfig: Route[] = [
  { path: 'registrarse', component: RegistrarComponent },

  {
    path: 'acceso', component: AppComponent, children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'acceso',
  },
  {
    path: 'dash', component: DashComponent, children: [
      { path: '', component: InicioComponent },

      { path: 'alquileres', component: AlquileresComponent },
      { path: 'alquileres/registrar', component: AlquileresRegistrarComponent },
      { path: 'alquileres/editar/:id', component: AlquileresEditarComponent },

      { path: 'clientes', component: ClientesComponent },
      { path: 'clientes/registrar', component: ClientesRegistrarComponent },
      { path: 'clientes/editar/:id', component: ClientesEditarComponent },

      { path: 'vehiculos', component: VehiculosComponent },
      { path: 'vehiculos/registrar', component: VehiculosRegistrarComponent },
      { path: 'vehiculos/editar/:id', component: VehiculosEditarComponent },

      { path: 'usuarios', component: UsuariosComponent },
      { path: 'usuarios/registrar', component: UsuariosRegistrarComponent },
      { path: 'usuarios/editar/:id', component: UsuariosEditarComponent },



      { path: 'mis-alquileres', component: MisAlquileresComponent },
      { path: 'alquilar', component: AlquilarComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'acceso',
  },
];
