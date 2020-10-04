import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;
  headers;
  options;
  constructor(private _http: Http) {
    this.headers = new Headers( {'Access-Control-Allow-Origin': '*' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUsers() {

    return this._http.get('http://localhost:3000/api/users', this.options).pipe(map(result => this.result = result.json().data));
  }
}
