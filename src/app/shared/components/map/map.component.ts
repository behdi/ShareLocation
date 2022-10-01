import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements OnInit {
  center!: google.maps.LatLngLiteral;
  zoom = 15;
  options: google.maps.MapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 10,
  }
  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        (this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude })
    );
  }
}
