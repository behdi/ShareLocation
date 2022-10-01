import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocationType } from '../../models/location-types.model';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  locationForm: FormGroup;

  constructor() {
    this.locationForm = new FormGroup({
      name: new FormControl<string | null>(null),
      coordinates: new FormControl<google.maps.LatLngLiteral | null>(null),
      type: new FormControl<LocationType | null>(null),
      logo: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onMapClick() {}

  getSelectedPosition(selectedPosition: google.maps.LatLngLiteral) {
    console.log(selectedPosition);
    this.locationForm.get('coordinates')?.setValue(selectedPosition);
  }
}
