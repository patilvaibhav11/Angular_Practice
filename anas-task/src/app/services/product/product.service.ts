import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  productService():Observable<any>{
    return this.http.get<any>('http://localhost:3000/product/getAllProduct')
  }

  productByCategory():Observable<any>{
    return this.http.get<any>('http://localhost:3000/product/getProductbyId/')
  }

  productByCategoryActive(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:3000/product/getProductbyIdOnActive/'+id)
  }
}
