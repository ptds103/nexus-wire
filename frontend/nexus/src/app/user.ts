export class User {
  id: number = 0;
  userName: string = '';
  userPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
}

export class RegUser {
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
}

export class Device {
  id: number = 0;
  deviceName: string = '';
  year: number = 0;
  processor: String = '';
  description: String = '';
}

export class UserPlan {
  id: number = 0;
  userNameU: String = '';
  planNameU: String = '';
  numOfLines: number = 0;
}

export class PhonePlan {
  id: number = 0;
  planName: string = '';
  deviceLimit: string = '';
  pricePerLine: string = '';
  description: string = '';
}

export class UserDevice {
  id: number = 0;
  deviceName: string = '';
  phoneNumber: string = '';
  planName: string = '';
  userDeviceFirstName: string = '';
  userDeviceLastName: string = '';
  price: Number = 0;
}
