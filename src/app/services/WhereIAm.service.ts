import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WhereIAmService implements OnInit {
  position: any;
  /* 29 rue Louis Blanc
    Latitude: 48.86528
    Longitude: 2.3789568 */

  isLocated = false;

  constructor() { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }

  ngOnInit() {
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition(position => {
        this.position = <Position>position;
        this.isLocated = true;
        console.log( 'Dans le test navigator.geolocation ok', navigator );
      });
    } else {
      alert('Geolocation non supportée par le navigateur.');
      this.position = null;
      this.isLocated = false;
    }
    console.log( 'sortie findMe() Located: ', this.isLocated);
    return this.position;
  }

  trackMe() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.position = position;
        this.isLocated = true;
      });
    } else {
      alert('Geolocation non supportée par le navigateur.');
      this.isLocated = false;
    }
    return this.position;
  }

}
