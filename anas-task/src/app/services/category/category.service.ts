import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  categoryService():Observable<any>{
    return this.http.get<any>('http://localhost:3000/category/getAllCategory');
  }

  categoryStatusService():Observable<any>{
    return this.http.get<any>('http://localhost:3000/category/getCategoryActive');
  }

}
