import { Usuarios } from './usuarios';
import { Clientes } from './clientes';
import { Vehiculos } from './vehiculos';

export interface Alquileres {
  $key?: string;
  _id?: number;
  cliente?: Clientes;
  vehiculos?: Vehiculos;
  idcliente: number;
  idvehiculo: number;
  finicio: string;
  dias?: number;
  ffinal: string;
  precio: number;
  pagado: boolean;
}
