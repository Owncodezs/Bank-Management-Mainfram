import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = "http://localhost:4000/auth/";
  constructor(private http :HttpClient,private tockenStorage:TokenStorageService ,private router:Router) { }
  newuser(data:any):Observable<any>{
    console.log('new user...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}register`, body,{'headers':headers})

  }
  login(data:any):Observable<any>{
    console.log('login...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}login`, body,{'headers':headers})
  }
 
  canActivate():Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify({token:window.sessionStorage.getItem('auth-token')}); 
    console.log(body)
    return this.http.post(`${this.baseURL}check`, body,{'headers':headers})
    // console.log('responces',res)
    // if () {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    // return true;
  }
}
