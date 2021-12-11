import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly COMPOUND_URL;
  readonly LOGIN_URL;

  constructor(private http: HttpClient) { 
    this.COMPOUND_URL = 'http://localhost:5000';
    this.LOGIN_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get(`${this.COMPOUND_URL}/${uri}`);
  }

  createUser(uri: string, payload: object) {
    return this.http.post(`${this.LOGIN_URL}/${uri}`, payload);
  }

}
