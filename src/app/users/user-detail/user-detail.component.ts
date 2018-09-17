import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  userForm: FormGroup;

  userId: number;

  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (Number(params.get('id')) > 0) {
          this.userId = Number(params.get('id'));
          return this.userService.getUser(Number(params.get('id')));
        }
      })
    ).subscribe(user => {
      this.userForm.get("name").setValue(user.name);
    });
  }

  submitForm() {
    this.userService.updateUser({ id: this.userId, name: this.userForm.get("name").value, status: 1 }).subscribe(user => {
      console.log('OK!');
    });
  }
}
