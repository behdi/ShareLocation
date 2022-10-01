import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  @Input() controlName!: string;
  onChange: any = (currentFile: string | null) => {};
  onTouch: any = () => {};
  uploadedFile: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: Event) {
    let reader = new FileReader();
    let file = (<HTMLInputElement>event.target).files;

    if (!file || !file.length) {
      return;
    }

    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.uploadedFile = reader.result as string;
      this.onChange(this.uploadedFile);
      console.log(this.uploadedFile);
    };
  }

  writeValue(currentFile: string): void {
    this.uploadedFile = currentFile;
    this.onChange(currentFile);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
