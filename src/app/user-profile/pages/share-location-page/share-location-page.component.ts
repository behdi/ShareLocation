import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { availableLocationTypes } from '../../models/location-types.model';
import { ShareLocationForm } from '../../models/share-location-form.model';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  locationForm: FormGroup<ShareLocationForm>;
  locationFormControls: ShareLocationForm;

  constructor() {
    this.locationForm = new FormGroup<ShareLocationForm>({
      name: new FormControl(null, [Validators.required]),
      coordinates: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      logo: new FormControl(null, [Validators.required]),
    });

    this.locationFormControls = this.locationForm.controls;
  }

  ngOnInit(): void {}

  onMapClick() {}

  getSelectedPosition(selectedPosition: google.maps.LatLngLiteral) {
    this.locationFormControls.coordinates.setValue(selectedPosition);
  }

  ctrlHasError(ctrl: FormControl) {
    return ctrl.touched && ctrl.errors;
  }

  formHasErrors() {
    return (
      this.locationFormControls.coordinates.dirty &&
      this.locationFormControls.logo.dirty &&
      this.locationForm.errors
    );
  }

  get availableLocationTypes() {
    return availableLocationTypes;
  }
}
