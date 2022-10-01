import { LocationType } from './location-types.model';

export interface UserLocation {
  locationName: string;
  locationOnMap: google.maps.LatLngLiteral;
  locationType: LocationType;
  logo: string;
}
