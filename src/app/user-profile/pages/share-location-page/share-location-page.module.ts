import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareLocationPageRoutingModule } from './share-location-page-routing.module';
import { ShareLocationPageComponent } from './share-location-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShareLocationPageComponent
  ],
  imports: [
    CommonModule,
    ShareLocationPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShareLocationPageModule { }
