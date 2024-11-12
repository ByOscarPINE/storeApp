import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../app.interface';

const URL_API = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  private _http = inject(HttpClient) ;

  constructor() { }

  getProducts(){
    return this._http.get<Product[]>(URL_API + 'products');
  }

  delProduct(id: number){
    return this._http.delete(URL_API + 'products/' + id);
  }
}
