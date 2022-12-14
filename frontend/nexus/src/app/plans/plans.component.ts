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
    console.log(this.userPlan)
    let currentUserPlan = this.userPlan.find((p: any) => {
      return p.userNameU.toLowerCase() === Object.values(this.user)[5].toLowerCase();
      })
      console.log(currentUserPlan)
      currentUserPlan.planNameU = value
      this.userService.updateUserPlan(currentUserPlan.id, currentUserPlan).subscribe((data) => {
        // data.planNameU = value
        let temp = data
        console.log(data, 'this is datum')
    })
    

    // console.log(currentUserPlan)
    // for (let i = 0; i < temp.length; i++) {
    //   if (
    //     temp[i].userNameU.toLowerCase() === this.user.userName.toLowerCase()
    //   ) {
    //     this.singlePlan = temp[i];
    //   }

    // }
    // this.userService.updateUserPlan(this.singlePlan.id, this.singlePlan).subscribe(
    //   data => {
    //     this.goToUserList();
    //   }
    // )
  }
  onSubmit() {
    // this.onClick;
    this.goToUserList();

  };
  
  private getUserPlan() {
    this.userService.getUserPlans().subscribe((data) => {
      this.userPlan = data;
      console.log(this.userPlan);
    });
  }

  private updateUserPlan() {

  }

  goToUserList() {
    this.router.navigate(['/overview']);
  }
}
