import { Component, OnInit } from '@angular/core';
import { User, UserDevice, PhonePlan } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  userDevice: UserDevice = new UserDevice();
  userPlan: any = [];
  userDevices: any = [];
  user: User = new User();
  displayPhonePlan: any = {}
  phonePlan: PhonePlan[] = [];
  phonePlans: any = {};
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserPlan();
    this.getUser();
    this.getUserDevice();
    this.getPlan();

  }

  private getUser() {
     this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  private getPlan() {
    this.userService.getPhonePlans().subscribe((data) => {
      this.phonePlan = data;
      this.dataManipulation()
    });
  }
  dataManipulation() {
  let tempPlan = this.userPlan.find((p: any) => {
    return p.userNameU.toLowerCase() === this.user.userName.toLowerCase();
  });
  console.log(tempPlan)
  this.displayPhonePlan = this.phonePlan.find((p) => {
    return p.planName.toLowerCase() === tempPlan.planNameU.toLowerCase();
  });
  }
  //Matching device with firstname + lastname
  //both User and userDevice have first + last name
  // here, we are retreving DeviceName, phoneNumber attached to the device
  private getUserDevice() {
    this.userService.getUserDevices().subscribe((data) => {
      this.userDevice = data;
      let temp: any = this.userDevice;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].userDeviceLastName === this.user.lastName) {
          this.userDevices.push(temp[i]);
        }
      }
    });
  }

  private getUserPlan() {
    this.userService.getUserPlans().subscribe((data) => {
      this.userPlan = data;
    });
  }
}
