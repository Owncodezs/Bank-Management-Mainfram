import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./authstyle.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  mylogo:any="../../assets/Bank-of-India.png"
  ngOnInit(): void {
  }
  onchage(data:any){
    
  }
  login(){
    this.router.navigate(['/login'])
  }
}
