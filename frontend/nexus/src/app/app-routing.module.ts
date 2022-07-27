import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserDashComponent } from './user-dash/user-dash.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component'; 
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent, },
  {path: 'plans', component: PlansComponent, },

  {path: 'create-user', component: CreateUserComponent, canActivate:[AuthGaurdService]},

  {path: '', component: HomeComponent},
  {path: 'update-user/:id', component: UpdateUserComponent, canActivate:[AuthGaurdService]},

  {path: 'user-details/:id', component: UserDetailComponent, canActivate:[AuthGaurdService]},

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},

  {path: 'overview', component: UserDashComponent,canActivate:[AuthGaurdService]},

  {path: 'devices', component: DevicesComponent, canActivate:[AuthGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
