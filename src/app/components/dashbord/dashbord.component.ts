import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private auth:AuthService ,private router:Router ) { }

  ngOnInit(): void {
    // this.auth.canActivate().subscribe(res => {
    //   alert(res.message)
    //   if(res.status==false){
    //     this.router.navigate(['/login'])
    //   }})
  }
 
}
 