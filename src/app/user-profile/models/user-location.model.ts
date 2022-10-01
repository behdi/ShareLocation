import { LocationType } from './location-types.model';

export interface UserLocation {
  name: string;
  coordinates: google.maps.LatLngLiteral;
  type: LocationType;
  logo: string;
}
