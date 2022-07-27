import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];

  device: Device = new Device();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  images = [
    'data:image/webp;base64,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',
    'https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-12/carousel/blue/64gb/6861C-1_carousel.png',
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343702000',
  ];

  ngOnInit(): void {
    this.getDevices();
  }
  private getDevices() {
    this.userService.getDeviceList().subscribe((data) => {
      this.devices = data;
      console.log(data);
    });
  }
}
