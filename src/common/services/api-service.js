import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  headers = [{
    key: 'Content-Type',
    value: 'application/json'
  }];

  constructor(http: Http) {
    this.http = http;
  }

  setHeaders() {
    let _headers = new Headers();
    this.headers.map((header) => _headers.append(header.key, header.value));
    console.log(_headers);
    return _headers;
  }

  Get(url) {
    return this.http.get(url, {
      headers: this.setHeaders()
    })
    .map((res) => this.extractData(res, 'GET'))
    .catch(this.handleError);
  }

  Post(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, JSON.stringify({data: data}), {
        headers: headers
      })
      .map((res) => this.extractData(res, 'GET'))
      .catch(this.handleError);
  }

  extractData(res, type) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  handleError(error) {
    let errMsg = error.message || 'Server error';
    console.error(error);
    return Observable.throw(error);
  }

}