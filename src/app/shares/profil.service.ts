import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  baseURL: string = "http://localhost:4000/profil/";
  constructor(private http :HttpClient,private tockenStorage:TokenStorageService ,private router:Router) { }
  
  viewstatement(data:any):Observable<any>{
    console.log('viewstatement...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}statement`, body,{'headers':headers})
  }
  checkbalance(data:any):Observable<any>{
    console.log('checkbalance...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}checkbalance`, body,{'headers':headers})
  } 
  transfer(data:any):Observable<any>{
    console.log('transfer...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}transfer`, body,{'headers':headers})
  }
  viewpayer(data:any):Observable<any>{
    console.log('viewpayer...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}viewpayer`, body,{'headers':headers})
  }
  addpayer(data:any):Observable<any>{
    console.log('addpayer...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}addpayer`, body,{'headers':headers})
  }
}
