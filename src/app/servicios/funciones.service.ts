// tslint:disable
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FuncionesService {

  constructor(private router: Router) { }

  get_igv(): number {
    return 18.00;
  }

  get_fecha_local() {
    var dt = new Date();
    var localDate = dt;

    var gmt = localDate;
    var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
    var localNow = new Date().getTimezoneOffset(); // get the timezone
    var localTime = min - localNow; // get the local time
    var dateStr = new Date(localTime * 1000 * 60);

    return dateStr.toISOString();
  }

}
