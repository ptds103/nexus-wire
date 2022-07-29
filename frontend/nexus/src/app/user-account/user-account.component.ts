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

  userDevices: any = [];
  user: User = new User();
  phonePlan: PhonePlan[] = [];
  phonePlans: any = {};
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getUserDevice();
    this.getPlan();
  }

  private getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  //Matching userPlan with PhonePlan
  //here, we are retrieving Plan, Cost per month and device limit
  //when demonstating, do not delete all devices, it will break
  private getPlan() {
    this.userService.getPhonePlans().subscribe((data) => {
      this.phonePlan = data;
      let temp: any = this.phonePlan;
      for (let i = 0; i < temp.length; i++) {
        if (
          temp[i].planName.toLowerCase() ==
          this.userDevices[0].planNameD.toLowerCase()
        ) {
          this.phonePlans = temp[i];
        }
      }
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
}
