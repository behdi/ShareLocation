import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-errors',
  templateUrl: './form-input-errors.component.html',
  styleUrls: ['./form-input-errors.component.less'],
})
export class FormInputErrorsComponent implements OnInit {
  @Input() ctrl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
