import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/shares/profil.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  constructor(public profil:ProfilService ,private tokenStorage:TokenStorageService  ) { }
  data:any
  

  ngOnInit(): void {
    this.profil.checkbalance({token:this.tokenStorage.getToken()}).subscribe(res => {
      // alert(res.message)
      if(res.status){
        this.data=res.data[0]        
      }})
  }
  

}
