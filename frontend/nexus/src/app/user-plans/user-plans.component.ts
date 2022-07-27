import { Component, OnInit } from '@angular/core';
import { UserPlan } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-plans',
  templateUrl: './user-plans.component.html',
  styleUrls: ['./user-plans.component.css']
})
export class UserPlansComponent implements OnInit {
  //userPlan: UserPlan = new UserPlan;
  userPlans: UserPlan[] = []

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserPlan();
  }


private getUserPlan(){
  this.userService.getUserPlans().subscribe(data => {
    this.userPlans = data;
    console.log(data)
  });
}

updatePlan(){
  // this.router.navigate(['update-user', id]);
}

deletePlan(){
  // this.userService.deleteUser(id).subscribe( data => {
  //   console.log(data);
  //   this.getUsers();
  }
}




