import { Component, OnInit } from '@angular/core';
import { User, UserDevice, PhonePlan } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  userDevice: UserDevice = new UserDevice();
  userPlan: any = {};
  userDevices: any = [];
  user: User = new User();
  displayPhonePlan: any = {};
  phonePlan: PhonePlan[] = [];
  phonePlans: any = {};
  bool: boolean = true;
  bools: boolean = true;
  numb: Number = 0;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserPlan();
    this.getUser();
    this.getUserDevice();
    // this.getUserDevice();
    this.getPlan();
    this.billing();
  }

  private getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }
  billing() {
    console.log(this.userDevices);
    this.userDevices.map((e: any) => (this.numb += e.price));
    this.phonePlan.map((e: any) =>
      this.userPlan[0].planNameU === e.planName
        ? (this.numb += e.pricePerLine)
        : (this.numb = this.numb)
    );
    console.log(this.numb);
  }
  private getPlan() {
    this.userService.getPhonePlans().subscribe((data) => {
      this.phonePlan = data;
    });
  }
  private saveUserDevice() {
    this.userService.createUserDevice(this.userDevice).subscribe((data) => {
      this.router.navigate(['/overview']);
    });
  }
  private getUserPlan() {
    this.userService.getUserPlanByName().subscribe((data) => {
      this.userPlan = data;
    });
  }

  onClicks(value: any) {
    this.bools === true ? (this.bools = false) : (this.bools = true);
  }

  onClick(value: any) {
    this.bool === true ? (this.bool = false) : (this.bool = true);
    let temp = [];

    for (let i = 0; i < this.userDevices.length; i++) {
      if (this.userDevices[i].userDeviceLastName === this.user.lastName) {
        temp.push(this.userDevices[i]);
      }
    }
    this.userDevices = temp;
  }
  deleteUserDevices(id: number) {
    this.userService.deleteUserDevice(id).subscribe((data) => {
      this.getUserDevice();
    });
  }

  private getUserDevice() {
    this.userService.getUserDevices().subscribe((data) => {
      this.userDevice = data;
      this.userDevices = this.userDevice;
      // setTimeout((e: any) => {
      //   this.onClick(e);
      // }, 50);
    });
  }
  onSubmits() {
    this.saveUserDevice();
  }
  onSubmit() {
    let a = [];
    this.getUserDevice();
    for (let i = 0; i < this.userDevices.length; i++) {
      a.push(
        Object.values(this.userDevices[i])[
          Object.values(this.userDevices[i]).length - 1
        ]
      );
    }
    for (let i = 0; i < a.length; i++) {
      this.userService
        .updateUserDevice(Number(a[i]), this.userDevices[i])
        .subscribe((data) => {
          console.log(data, 'this is datum');
        });
    }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
