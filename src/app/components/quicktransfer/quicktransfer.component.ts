import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/auth.service';
import { ProfilService } from 'src/app/shares/profil.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';

@Component({
  selector: 'app-quicktransfer',
  templateUrl: './quicktransfer.component.html',
  styleUrls: ['./quicktransfer.component.css']
})
export class QuicktransferComponent implements OnInit {

  constructor(private profil:ProfilService ,private tokenStorage:TokenStorageService ,private router:Router) { }
  to_acs:any
  ngOnInit(): void {
    this.profil.viewpayer({token:this.tokenStorage.getToken()}).subscribe(res => {
      // alert(res.message)
      if(res.status){
       this.to_acs=res.data
        console.log(this.to_acs)
      }})
    
  }
  ontransfer(data:any){
    data.from_ac=parseInt(data.from_ac)
    data.to_ac=parseInt(data.to_ac)
    data.amount=parseInt(data.amount)
    data.token=this.tokenStorage.getToken()
    this.profil.transfer(data).subscribe(res => {
      alert(res.message)
      // alert(res.token)
      if(res.status){
        this.router.navigate(['/dashbord'])
      }
      else
        this.router.navigate(['/dashbord/quicktransfer'])
      
    })
    
  }
  onaddpayer(){
    console.log('hi')
    this.router.navigate(['/dashbord/addpayer'])
  }

}
