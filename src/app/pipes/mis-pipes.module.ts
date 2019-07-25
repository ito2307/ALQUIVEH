import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FiltroPipe],
  exports:[FiltroPipe]
})
export class MisPipesModule { }
