import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(page => {
      console.log(page);
      console.log(page.list)
      this.users = page.list;
      console.log(this.users);
    });
  }
}
