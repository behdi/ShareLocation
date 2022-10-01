import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocationType } from '../../models/location-types.model';
import { ShareLocationForm } from '../../models/share-location-form.model';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  locationForm: FormGroup;

  constructor() {
    this.locationForm = new FormGroup<ShareLocationForm>({
      name: new FormControl(null),
      coordinates: new FormControl(null),
      type: new FormControl(null),
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
