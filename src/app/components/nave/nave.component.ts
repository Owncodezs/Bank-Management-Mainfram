import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/auth.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  constructor(private auth:AuthService ,private tokenstorages:TokenStorageService ,private router:Router) { } 
  mylogo:any="../../assets/Bank-of-India.png"
  loginstatus:any="login"
  ngOnInit(): void {
  }

  signout() {
    this.auth.logout().subscribe(res => {

        alert(res.message)
        if(res.status){
          localStorage.clear();
          this.router.navigate(['/login'])
        }
      })
    }

}
