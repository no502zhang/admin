import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UsersModule { }
