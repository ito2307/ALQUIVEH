import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloSeccionComponent } from './titulo-seccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule,ReactiveFormsModule
  ],
  declarations: [TituloSeccionComponent],
  exports: [TituloSeccionComponent]
})
export class TituloSeccionModule { }
