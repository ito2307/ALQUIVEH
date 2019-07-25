//tslint:disable
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DatabaseReference } from 'angularfire2/interfaces';
import { Http } from '@angular/http';
import { FirebaseApp } from 'angularfire2';
import { firebaseConfig } from '../../environments/firebase.config';
import { Subject } from 'rxjs';

@Injectable()
export class AlquileresService {

  sdkDb: DatabaseReference;

  bdref = 'alquileres';

  constructor(
    private http: Http,
    private db: AngularFireDatabase,
    private firebaseApp: FirebaseApp
  ) {
    this.sdkDb = firebaseApp.database().ref();
  }

  listar_datos(): Observable<any[]> {
    return this.db.list(this.bdref);
  }

  buscar_alquileres_por_cliente(idcliente): Observable<any> {
    return this.db.list(this.bdref, { query: { orderByChild: 'idcliente', equalTo: idcliente } });
  }

  buscar_item(iditem): Observable<any[]> {
    return this.db.object(this.bdref + '/' + iditem);
  }

  registrar_item(item: any): Observable<any> {
    const token = this.sdkDb.child(this.bdref).push().key;
    const mi_item = {
      [`${this.bdref}/${token}`]: Object.assign({}, item)
    };
    return this.firebaseUpdate(mi_item);
  }

  modificar_item(iditem: string, item: any): Observable<any> {
    const mi_item = Object.assign({}, item);
    delete mi_item.$key;
    return this.firebaseUpdate({
      [`${this.bdref}/${iditem}`]: mi_item,
    });
  }

  eliminar_item(iditem: string): Observable<any> {
    return this.http.delete(firebaseConfig.databaseURL + '/' + this.bdref + '/' + iditem + '.json'
    );
  }

  firebaseUpdate(dataToSave) {
    const subject = new Subject();
    this.sdkDb.update(dataToSave).then(
      val => {
        subject.next(val);
        subject.complete();
      },
      err => {
        subject.error(err);
        subject.complete();
      }
    );
    return subject.asObservable();
  }

}
