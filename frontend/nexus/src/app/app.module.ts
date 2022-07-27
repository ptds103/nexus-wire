import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { DevicesComponent } from './devices/devices.component';
import { UserPlansComponent } from './user-plans/user-plans.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';

@NgModule({

  
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailComponent,
    UserAccountComponent,
    LoginComponent,
    LogoutComponent,
    UserDashComponent,
    DevicesComponent,
    UserPlansComponent,
    HomeComponent,
    PlansComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  //    {  
  //      provide:HTTP_INTERCEPTORS, useClass:CommonInterceptor, multi:true 
  //  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
