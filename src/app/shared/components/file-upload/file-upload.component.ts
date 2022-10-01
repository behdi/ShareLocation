import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
})
export class FileUploadComponent implements OnInit {
  @Input() formControlName!: string;

  constructor() {}

  ngOnInit(): void {}
}
