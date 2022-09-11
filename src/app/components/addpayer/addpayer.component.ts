import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/shares/profil.service';
import { TokenStorageService } from 'src/app/shares/token-storage.service';


@Component({
  selector: 'app-addpayer',
  templateUrl: './addpayer.component.html',
  styleUrls: ['./addpayer.component.css']
})
export class AddpayerComponent implements OnInit {


  constructor(private profil:ProfilService ,private tokenStorage:TokenStorageService ,private router:Router) { }




  ngOnInit(): void {
  }
  onadd(data:any){
    data.payer_acno=parseInt(data.payer_acno);
    data.token=this.tokenStorage.getToken();
    this.profil.addpayer(data).subscribe(res => {
      alert(res.message)
      // alert(res.token)
      if(res.status){
        this.router.navigate(['/dashbord'])
      }
      else
        this.router.navigate(['/dashbord/quicktransfer'])
      
    })
  }

}
