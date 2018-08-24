import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestProvider } from '../rest/rest';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  user;

  userSubject: Subject<any> = new Subject();

  constructor(public http: HttpClient, private rest: RestProvider) {
    console.log('Hello ServiceProvider Provider');
  }

  getProfile() {
    this.rest.get('user/profile').subscribe(res => {
      this.user = res;
      this.userSubject.next(res);
    });
  }

}
