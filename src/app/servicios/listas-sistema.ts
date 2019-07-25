export class ListasSistema {

  tipos_acceso: OpcionesLista[] = [
    { codigo: 1, nombre: 'Administrador' },
    { codigo: 2, nombre: 'Cliente' }
  ];

}

interface OpcionesLista {
  codigo: number;
  nombre: string;
}
