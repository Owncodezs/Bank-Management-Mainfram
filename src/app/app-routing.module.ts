import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpayerComponent } from './components/addpayer/addpayer.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { QuickenComponent } from './components/quicken/quicken.component';
import { QuicktransferComponent } from './components/quicktransfer/quicktransfer.component';
import { ViewstatementComponent } from './components/viewstatement/viewstatement.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  {path:'changepass',component:LoginComponent},  
  {path:'dashbord',component:DashbordComponent ,children:[
    {path:'checkbalance',component:CheckbalanceComponent },
    {path:'quicktransfer',component:QuicktransferComponent},
    {path:'viewstatement',component:ViewstatementComponent},
    {path:'quicken',component:QuickenComponent},
    {path:'addpayer',component:AddpayerComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 