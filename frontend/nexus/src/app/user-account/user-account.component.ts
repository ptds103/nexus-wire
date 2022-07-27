import { Component, OnInit } from '@angular/core';
import { User, UserPlan } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  userPlans: UserPlan[] = [];

  userPlan: UserPlan = new UserPlan();
  user: User = new User();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
    this.getuserPlan();
  }
  private getuserPlan() {
    this.userService.getUserPlans().subscribe((data) => {
      this.userPlans = data;
      console.log(data, 'this is user_plan');
    });
  }
}
