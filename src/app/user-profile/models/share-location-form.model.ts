import { FormControl } from '@angular/forms';
import { LocationType } from './location-types.model';

export interface ShareLocationForm {
  name: FormControl<string | null>;
  coordinates: FormControl<google.maps.LatLngLiteral | null>;
  type: FormControl<LocationType | null>;
  logo: FormControl<string | null>;
}
