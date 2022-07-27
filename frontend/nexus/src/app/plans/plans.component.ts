import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonePlan } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: PhonePlan[] = [];
  plan: PhonePlan = new PhonePlan
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  myearth: string = 'assets/images/light.png'
  ngOnInit(): void {
    this.getPlans();
  }

  private getPlans() {
    this.userService.getPhonePlans().subscribe(data => {
      this.plans = data;
      console.log(data)
    });
  }

}
