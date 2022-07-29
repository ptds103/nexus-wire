import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Device, UserPlan, PhonePlan, UserDevice, RegUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:8080/api/v1/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<User>('http://localhost:8080/api/v1/user', {
      headers,
    });
  }

  getUserDevices(): Observable<UserDevice> {
    const headers = new HttpHeaders({
      Autorization:
        'Basic' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<UserDevice>(
      'http://localhost:8080/api/v1/user_devices',
      {
        headers,
      }
    );
  }
  getUserDevice(): Observable<UserDevice> {
    const headers = new HttpHeaders({
      Autorization:
        'Basic' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<UserDevice>(
      'http://localhost:8080/api/v1/user_device',
      {
        headers,
      }
    );
  }

  getPhonePlans(): Observable<PhonePlan[]> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<PhonePlan[]>(
      'http://localhost:8080/api/v1/phone_plans',
      { headers }
    );
  }

  getUsersList(): Observable<User[]> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<User[]>('http://localhost:8080/api/v1/users', {
      headers,
    });
  }

  getUserPlanByName(): Observable<UserPlan> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });

    return this.httpClient.get<UserPlan>(
      'http://localhost:8080/api/v1/user_plan',
      { headers }
    );
  }

  createUser(user: RegUser): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.post('http://localhost:8080/api/v1/register', user);
  }
  createUserDevice(user: UserDevice): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.post('http://localhost:8080/api/v1/user_devicess', UserDevice);
  }

  getUserById(id: number): Observable<User> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });

    return this.httpClient.get<User>(`${this.baseURL}/${id}`, { headers });
  }

  updateUser(id: number, user: User): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.put(`${this.baseURL}/${id}`, user, { headers });
    //return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  updateUserDevice(id: number, userDevice: UserDevice): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    console.log(userDevice)
    return this.httpClient.put(
      `http://localhost:8080/api/v1/user_devices/${id}`,
      userDevice,
      { headers }
    );
    //return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  updateUserPlan(id: number, userPlan: UserPlan): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.put(
      `http://localhost:8080/api/v1/user_plans/${id}`,
      userPlan,
      { headers }
    );
    //return this.httpClient.put(`${this.baseURL}/${id}`, user);
    // this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
    //     .subscribe(data => this.postId = data.id);
  }

  deleteUser(id: number): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers });
    //return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deleteUserDevice(id: number): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.delete(
      `http://localhost:8080/api/v1/user_devices/${id}`,
      { headers }
    );
    //return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  //DEVICES
  getDeviceList(): Observable<Device[]> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<Device[]>(
      'http://localhost:8080/api/v1/devices',
      { headers }
    );
  }

  //USERPLANS

  getUserPlans(): Observable<UserPlan[]> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          sessionStorage.getItem('username') +
            ':' +
            sessionStorage.getItem('password')
        ),
    });
    return this.httpClient.get<UserPlan[]>(
      'http://localhost:8080/api/v1/user_plans',
      { headers }
    );
  }
}
