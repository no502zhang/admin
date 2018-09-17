import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/user.model';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchForm: FormGroup;

  users: User[] = [];
  nzTotal = 0;
  nzPageIndex = 1;
  nzPageSize = 10;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
    this.searchForm = this.formBuilder.group({
      searchKey: []
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(page => {
      this.users = page.list;
      this.nzTotal = page.total;
      this.nzPageIndex = page.pageNum;
      this.nzPageSize = page.pageSize;
    });
  }

  search(): void {
    for (const i in this.searchForm.controls) {
    }
  }
}
