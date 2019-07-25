export interface Usuarios {
  $key?: string;
  _id?: number;
  usuario?: string;
  clave?: string;
  nombre?: string;
  tipo?:number; //1 es admin y 2 es usuario
}
