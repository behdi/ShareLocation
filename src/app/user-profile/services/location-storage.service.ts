import { Injectable } from '@angular/core';
import { UserLocation } from '../models/user-location.model';

const LOCATION_STORAGE_KEY = 'location';

@Injectable({
  providedIn: 'root',
})
export class LocationStorageService {
  storedLocations: UserLocation[];

  constructor() {
    this.storedLocations = this.getAllStoredLocations();
  }

  public saveLocation(location: UserLocation) {
    this.storedLocations.push(location);
    this.saveLocationsToLocalStorage();
  }

  public getLocationByName(name: string) {
    return this.storedLocations.filter((loc) => loc.name === name);
  }

  public removeLocationByName(name: string) {
    this.storedLocations = this.storedLocations.filter(
      (loc) => loc.name !== name
    );
    this.saveLocationsToLocalStorage();
  }

  private getAllStoredLocations() {
    const locations = localStorage.getItem(LOCATION_STORAGE_KEY);
    return JSON.parse(locations ?? '[]') as UserLocation[];
  }

  private saveLocationsToLocalStorage() {
    localStorage.setItem(
      LOCATION_STORAGE_KEY,
      JSON.stringify(this.storedLocations)
    );
  }
}
