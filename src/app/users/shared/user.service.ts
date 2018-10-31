import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './user.model';

import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Page> {
    return this.http.get<Page>('/system/users/');
  }

  getUser(id: number): Observable<User> {
    console.log(id);
    return this.http.get<User>('/system/users/' + id);
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>('/system/users/', user)
  }

  updateUser(user: User): Observable<User> {
    console.log(user);
    return this.http.put<User>('/system/users/' + user.id, user)
  }

  deleteUser(id: number): Observable<boolean> {
    console.log(id);
    return this.http.delete<boolean>('/system/users/' + id)
  }
}
