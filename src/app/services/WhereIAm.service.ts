import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhereIAmService {

  position: Position;
  isLocated = false;

  constructor() {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.position = position;
        this.isLocated = true;
      });
    } else {
      alert('Geolocation non supportée par le navigateur.');
      this.isLocated = false;
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isLocated = true;
      navigator.geolocation.watchPosition((position) => {
        this.position = position;
      });
    } else {
      alert('Geolocation non supportée par le navigateur.');
      this.isLocated = false;
    }
  }

}
