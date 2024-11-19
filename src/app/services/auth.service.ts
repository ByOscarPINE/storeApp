import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'http://localhost:8000/api/'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _http = inject(HttpClient);

  constructor() { }

  login(body: any){
    return this._http.post(API_URL + 'auth/login', body)
  }

  register (body: any) {
    return this._http.post(API_URL + 'auth/register', body)
  }

  getToken () {
    return localStorage.getItem('token')|| null;
  }
}
