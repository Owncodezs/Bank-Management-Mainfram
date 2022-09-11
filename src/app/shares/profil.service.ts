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
    console.log('login...')
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(`${this.baseURL}statement`, body,{'headers':headers})
  }
}
