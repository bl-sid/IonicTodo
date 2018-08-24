import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl = 'http://localhost:8070/';

  httpOptions;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello RestProvider Provider');
    this.setToken();
  }

  setToken() {
    this.storage.get('token').then(token => {
      const headers = new HttpHeaders().append(
        'Authorization',
        'Bearer ' + token
      );
      this.httpOptions = { headers: headers };
    });
  }

  login(url, body) {
    url = this.baseUrl + url;

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic dG9kbzp0b2Rv');
      // .append('Content-Type', 'application/x-www-form-urlencoded');

    const fd = new FormData();
    fd.set('username', body.email);
    fd.set('password', body.password);
    fd.set('grant_type', 'password');

    return this.http.post(url, fd, { headers: headers });
  }

  get(url) {
    url = this.baseUrl + url;
    return this.http.get(url, this.httpOptions);
  }

}
