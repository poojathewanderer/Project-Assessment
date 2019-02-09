import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RetailerLoginComponent } from './retailerLogin/retailer-login.component';
import { RegistrationComponent } from 'src/Registration/registration-form.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    RetailerLoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'customer-login', component: CustomerLoginComponent}
      ,{path:'retailer-login', component: RetailerLoginComponent}
      ,{path:'registration-form', component: RegistrationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
