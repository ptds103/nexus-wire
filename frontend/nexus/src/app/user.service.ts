import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User, Device, UserPlan, PhonePlan } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<User> {
    // let username ="mike99";
    // let password ="password";
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.get<User>('http://localhost:8080/api/v1/user', { headers });
  }

  getPhonePlans(): Observable<PhonePlan[]> {
    // let username ="mike99";
    // let password ="password";
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.get<PhonePlan[]>('http://localhost:8080/api/v1/phone_plans', { headers });
  }

  getUsersList(): Observable<User[]> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.get<User[]>('http://localhost:8080/api/v1/users', { headers });

  }

  createUser(user: User): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });

    return this.httpClient.get<User>(`${this.baseURL}/${id}`, { headers });

  }

  updateUser(id: number, user: User): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.put(`${this.baseURL}/${id}`, user, { headers });
    //return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.delete(`${this.baseURL}/${id}`, { headers });
    //return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  //DEVICES
  getDeviceList(): Observable<Device[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.get<Device[]>('http://localhost:8080/api/v1/devices', { headers });
  }


  //USERPLANS

  getUserPlans(): Observable<UserPlan[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
    return this.httpClient.get<UserPlan[]>('http://localhost:8080/api/v1/user_plans', { headers });
  }


}
