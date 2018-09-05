import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './user.model';

import { MessageService } from '../../shared/message.service';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<Page> {
    this.messageService.add('UserService: getOrders');
    return this.http.get<Page>('/system/users/');
  }

  getUser(id: number): Observable<User> {
    this.messageService.add('UserService: getOrder');
    return this.http.get<User>('/system/users/' + id);
  }
}
