import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [UserListComponent]
})
export class UsersModule { }
