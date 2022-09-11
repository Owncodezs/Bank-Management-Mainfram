import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/auth.service';
import { ProfilService } from 'src/app/shares/profil.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';

@Component({
  selector: 'app-viewstatement',
  templateUrl: './viewstatement.component.html',
  styleUrls: ['./viewstatement.component.scss']
})
export class ViewstatementComponent implements OnInit {
  @Input() count:any
  constructor(private profil:ProfilService ,private tokenStorage:TokenStorageService) { }
  items:any
  check(data:any):any{
    if(data==null){
      return '‒'
    }
    else{
      return data
    }
  }
  default:string='No Transaction Found'

  ngOnInit(): void {
    
    this.profil.viewstatement({token:this.tokenStorage.getToken()}).subscribe(res => {
      // alert(res.message)
      console.log(this.count)
      if(res.status){
        if(this.count!=undefined){
          this.items=res.data
        }
        else{
          this.items=res.data
        }
        
      }})
      
  }


}
