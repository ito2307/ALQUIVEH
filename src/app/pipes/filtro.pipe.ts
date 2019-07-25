import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], campo:string, filter: any): any {
    if (!items || !filter) {
      return items;
    }
    console.log(typeof(filter));
    if(typeof(filter)=='number'){
      return items.filter(item => item[campo].toString().indexOf(filter) !== -1);
    }else{
      return items.filter(item => item[campo].toUpperCase().indexOf(filter.toUpperCase()) !== -1);
    }

  }

}
