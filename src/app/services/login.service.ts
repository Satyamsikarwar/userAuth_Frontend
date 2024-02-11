import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  login(user:any){
     return this.http.post('http://localhost:8000/login',user);
  }
  signup(user:any){
    return this.http.post('http://localhost:8000/signup',user);
  }
  getCurrentUser(){
    // const token = localStorage.getItem('access_token');
    
    // // Create headers with the token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });
    return this.http.get('http://localhost:8000/users/me');
  }
}
