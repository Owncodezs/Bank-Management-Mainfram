import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    // this.auth.canActivate()
  }

}
