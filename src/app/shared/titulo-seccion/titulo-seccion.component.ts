import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'titulo-seccion',
  templateUrl: './titulo-seccion.component.html',
  styleUrls: ['./titulo-seccion.component.css']
})
export class TituloSeccionComponent implements OnInit {
  @Input() titulo;
  @Input() anterior;
  constructor() { }

  ngOnInit() {
  }

}
