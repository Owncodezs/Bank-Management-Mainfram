import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthService } from './shares/auth.service';
import { DashbordComponent } from './components/dashbord/dashbord.component'
import {NaveComponent}from './components/nave/nave.component'
import { TokenStorageService } from './shares/token-storage.service';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { QuicktransferComponent } from './components/quicktransfer/quicktransfer.component';
import { ViewstatementComponent } from './components/viewstatement/viewstatement.component';
import { QuickenComponent } from './components/quicken/quicken.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashbordComponent,
    NaveComponent,
    CheckbalanceComponent,
    QuicktransferComponent,
    ViewstatementComponent,
    QuickenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
