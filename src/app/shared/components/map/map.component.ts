import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  @Output() selectedPosition = new EventEmitter<google.maps.LatLngLiteral>();
  @Output() mapClick = new EventEmitter<void>();

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
    fullscreenControl: false,
  };
  markerPosition?: google.maps.LatLngLiteral;

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        (this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude })
    );
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    this.mapClick.emit();
  }

  onMapDblClick(event: google.maps.MapMouseEvent) {
    this.markerPosition = event.latLng?.toJSON();
    this.selectedPosition.emit(this.markerPosition);
  }

  openInfo(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  clearMarker() {
    this.markerPosition = undefined;
  }
}
