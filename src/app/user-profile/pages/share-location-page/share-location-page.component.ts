import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { availableLocationTypes } from '../../models/location-types.model';
import { ShareLocationForm } from '../../models/share-location-form.model';
import { UserLocation } from '../../models/user-location.model';
import { LocationStorageService } from '../../services/location-storage.service';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  locationForm: FormGroup<ShareLocationForm>;
  locationFormControls: ShareLocationForm;

  constructor(private locationStorage: LocationStorageService) {
    this.locationForm = new FormGroup<ShareLocationForm>({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      coordinates: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      logo: new FormControl(null, [Validators.required]),
    });

    this.locationFormControls = this.locationForm.controls;
  }

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.locationForm.invalid) {
      this.locationForm.markAllAsTouched();
      return;
    }

    const values: UserLocation = {
      name: this.locationFormControls.name.value!,
      coordinates: this.locationFormControls.coordinates.value!,
      type: this.locationFormControls.type.value!,
      logo: this.locationFormControls.logo.value!,
    };

    this.locationStorage.saveLocation(values);
  }

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
