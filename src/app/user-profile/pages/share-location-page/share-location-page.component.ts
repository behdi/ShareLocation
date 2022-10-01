import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { availableLocationTypes } from '../../models/location-types.model';
import { ShareLocationForm } from '../../models/share-location-form.model';
import { UserLocation } from '../../models/user-location.model';
import { LocationStorageService } from '../../services/location-storage.service';
import { ToastrService } from 'ngx-toastr';
import { MapComponent } from 'src/app/shared/components/map/map.component';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  locationForm: FormGroup<ShareLocationForm>;
  locationFormControls: ShareLocationForm;

  constructor(
    private locationStorage: LocationStorageService,
    private toastr: ToastrService
  ) {
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
    this.resetForm();
    this.toastr.success('Location saved successfully');
  }

  getSelectedPosition(selectedPosition: google.maps.LatLngLiteral) {
    this.locationFormControls.coordinates.setValue(selectedPosition);
  }

  ctrlHasError(ctrl: FormControl) {
    return ctrl.touched && ctrl.errors;
  }

  resetForm() {
    this.locationForm.reset();
    this.mapComponent.clearMarker();
  }

  get availableLocationTypes() {
    return availableLocationTypes;
  }
}
