import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { QuickenComponent } from './components/quicken/quicken.component';
import { QuicktransferComponent } from './components/quicktransfer/quicktransfer.component';
import { ViewstatementComponent } from './components/viewstatement/viewstatement.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },  
  {path:'dashbord',component:DashbordComponent ,children:[
    {path:'checkbalance',component:CheckbalanceComponent },
    {path:'quicktransfer',component:QuicktransferComponent},
    {path:'viewstatement',component:ViewstatementComponent},
    {path:'quicken',component:QuickenComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 