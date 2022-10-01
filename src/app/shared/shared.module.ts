import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [CardComponent, FileUploadComponent, MapComponent],
  imports: [CommonModule, ReactiveFormsModule, GoogleMapsModule],
  exports: [CardComponent, FileUploadComponent, MapComponent],
})
export class SharedModule {}
