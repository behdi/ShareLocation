import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-location-page',
  templateUrl: './share-location-page.component.html',
  styleUrls: ['./share-location-page.component.less'],
})
export class ShareLocationPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onMapClick() {}

  getSelectedPosition(selectedPosition: google.maps.LatLngLiteral) {
    console.log(selectedPosition);
  }
}
