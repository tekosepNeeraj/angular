import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private BASE_URL:string='http://localhost/employee_management';

  constructor(private http:HttpClient) { }

  public login(data:any):Observable<any>{
    // const loginData = {
    //   email: data.email, 
    //   password: data.password 
    // };
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.BASE_URL}/login`,data);
  }
}
