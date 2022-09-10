import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shares/token-storage.service';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  constructor(public tokenstorages:TokenStorageService  ) { }
  data:any
  

  ngOnInit(): void {
    this.data=this.tokenstorages.getUser()
  }
  

}
