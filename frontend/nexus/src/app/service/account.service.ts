import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL = "http://localhost:8080/api/v1/user";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    let username = "javainuse";
    let password = "password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>('http://localhost:8080/api/v1/users', { headers });
  }


}
