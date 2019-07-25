import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable()
export class FuncionesSweetalert2Service {

  constructor() { }

  actualizar1() {
    return Swal.fire({
      type: 'success',
      title: 'Modificado',
      text: 'se modifico satisfactoriamente!!'
    })
  }

  actualizar() {
    let timerInterval;
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Modificado!',
      html: 'se modifico satisfactoriamente!!',
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading()
        let timerInterval: any = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  registrar() {
    let timerInterval;
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Registrado!',
      html: 'se guardo correctamente!!',
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading()
        let timerInterval: any = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  errorRegistrar() {
    Swal.fire({
      type: 'error',
      title: 'No se guardo',
      text: 'No se puedo registrar !!'
    })
  }

  errorActualizar() {
    Swal.fire({
      type: 'error',
      title: 'No se actualizo',
      text: 'No se puedo actualizar !!'
    })
  }

  campo_existente() {
    let timerInterval;
    Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'El campo ya existe,fue registrado anteriormente!!',
      html: 'Elija otra opcion!!',
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading()
        let timerInterval: any = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  acceso_erroneo() {

    let timerInterval;
    Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Usuario Incorrecto',
      text: 'Ingrese sus datos correctamente !!',
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading()
        let timerInterval: any = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  acceso_exitoso() {

    let timerInterval;
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Bienvenido',
      text: 'Accedio satisfactoriamente!!',
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading()
        let timerInterval: any = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }



}
