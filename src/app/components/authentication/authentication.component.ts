import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/auth.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authstyle.scss']
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
  mylogo:any="../../assets/Bank-of-India.png"
  mydata:any
  onlogin(data:any){
    data.cif_no=parseInt(data.cif_no)
    data.ac_no=parseInt(data.ac_no)
    console.log('main')
    this.auth.login(data) .subscribe(res => {
      alert(res.message)
      // alert(res.token)
      if(res.status){
        this.tokenstorages.saveToken(res.token)
        this.tokenstorages.saveUser(res.ac_no)
        console.log('storage',this.tokenstorages.getToken())
        this.router.navigate(['/dashbord'])
      }
      else
        this.router.navigate(['/login'])
      
    })
    
  } 
  forget(){
    this.router.navigate(['/changepass'])
  } 

}
