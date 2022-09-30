import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileHomeComponent } from './user-profile-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserProfileHomeComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
