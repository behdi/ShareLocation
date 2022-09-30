import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareLocationPageRoutingModule } from './share-location-page-routing.module';
import { ShareLocationPageComponent } from './share-location-page.component';


@NgModule({
  declarations: [
    ShareLocationPageComponent
  ],
  imports: [
    CommonModule,
    ShareLocationPageRoutingModule
  ]
})
export class ShareLocationPageModule { }
