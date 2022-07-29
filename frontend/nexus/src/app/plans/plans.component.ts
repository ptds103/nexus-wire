import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonePlan, User, UserPlan } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
})
export class PlansComponent implements OnInit {
  user: User = new User();
  userTemp: any = String;
  plans: PhonePlan[] = [];
  id: number = 0;
  plan: PhonePlan = new PhonePlan();
  userPlan: any = [];
  singlePlan: any = {};
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  myearth: string = 'assets/images/light.png';
  ngOnInit(): void {
    this.getUser();
    this.getPlans();
    this.getUserPlan();
  }

  private getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  private getPlans() {
    this.userService.getPhonePlans().subscribe((data) => {
      this.plans = data;
    });
  }
  onClick(value: any) {
    console.log(value);
    // let temp: any = this.userPlan;
    let currentUserPlan = this.userPlan.find((p: any) => {
      return p.userNameU.toLowerCase() === this.user.userName.toLowerCase();
      })
      currentUserPlan.planNameU = value
      this.userService.updateUserPlan(currentUserPlan.id, currentUserPlan).subscribe((data) => {
        // data.planNameU = value
    })
    
  }
  onSubmit() {
    this.goToUserList();

  };
  
  private getUserPlan() {
    this.userService.getUserPlans().subscribe((data) => {
      this.userPlan = data;
    });
  }

  private updateUserPlan() {

  }

  goToUserList() {
    this.router.navigate(['/overview']);
  }
}
