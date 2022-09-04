import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/auth.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthService ,private tokenstorages:TokenStorageService ,private router:Router) { } 

  ngOnInit(): void {
  
  }
  onsignup(data:any){
    console.log('main')
    this.auth.newuser(data) .subscribe(res => {
      // this.key=datas
      alert(res.message)
      console.log("key",res)
    })
    
  }
  mydata:any
  onlogin(data:any){
    console.log('main')
    this.auth.login(data) .subscribe(res => {
      alert(res.message)
      this.tokenstorages.saveToken(res.token)
      console.log('storage',this.tokenstorages.getToken())
      this.router.navigate(['/dashbord'])
      console.log("key",res)

    })
  }  

}
