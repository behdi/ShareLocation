export enum LocationType {
  Business = 'business',
  Library = 'library',
  School = 'school',
  University = 'uni',
  Cafe = 'cafe',
  Resturant = 'resturant',
}

export const availableLocationTypes = [
  { value: LocationType.Business, name: 'Business' },
  { value: LocationType.Library, name: 'Library' },
  { value: LocationType.School, name: 'School' },
  { value: LocationType.University, name: 'University' },
  { value: LocationType.Cafe, name: 'cafe' },
  {
    value: LocationType.Resturant,
    name: 'Resturant',
  },
];
