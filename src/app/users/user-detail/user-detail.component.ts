import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  validateForm: FormGroup;

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.validateForm = this.formBuilder.group({
      name: []
    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (Number(params.get('id')) > 0) {
          return this.userService.getUser(Number(params.get('id')));
        }
      })
    ).subscribe(user => this.user = user);
  }

  submitForm() {

  }
}
