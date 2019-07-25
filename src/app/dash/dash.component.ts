import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {

  nivel_usuario = Number(localStorage.getItem('vehi_nivel'));

  constructor(private _route: Router) { }

  ngOnInit() {
    console.log('Nivel de Usuario:', this.nivel_usuario);
  }

  salir() {
    this._route.navigate(['/acceso']);
  }

}
