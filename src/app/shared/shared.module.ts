import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, FileUploadComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardComponent, FileUploadComponent],
})
export class SharedModule {}
