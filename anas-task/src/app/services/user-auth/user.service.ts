import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  userLoginService(user_email,user_password):Observable<any>{
    return this.http.post<any>('http://localhost:3000/admin/loginUser', {user_email:user_email, user_password:user_password})
  }
}
