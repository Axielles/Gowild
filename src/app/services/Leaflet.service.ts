import { Injectable } from '@angular/core';
import { WhereIAmService } from './WhereIAm.service';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  myPosition: any;

  constructor( private gps: WhereIAmService ) { }

  onCall(latlon: any) {
    // My position from WhereIAm service
    this.myPosition = this.gps.getPosition().then(position => {
      console.log(`Ma position: ${position.lng} ${position.lat}`);
      this.myPosition = <Position>position;
      console.log('Ma position dans myPosition', this.myPosition);
    });

    console.log( 'Coordonnées de l\'évènement', latlon[0], latlon[1] );
//    const map = L.map('map').setView([latlon[0], latlon[1]], 11);
    const map = L.map('map').setView([ 2.354074, 48.855688], 11);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte de Paris'
    }).addTo(map);

    function onLocationFound(e: any) {
      const myIcon = L.icon({
        iconUrl: '../assets/images/marker-icon-red.png'
      });
      L.marker([e.latitude, e.longitude], { icon: myIcon }).bindPopup('Vous êtes ici').addTo(map).openPopup();
    }

    const eventLocation = () => {
      const myIcon = L.icon({
        iconUrl: '../assets/images/marker-icon-black.png'
      });
      L.marker(latlon,
        {icon: myIcon}).bindPopup('Votre événement').addTo(map).openPopup();
    };

    function onLocationError(e: any) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
    map.locate({setView: true, maxZoom: 11});

    map.on('locationfound', onLocationFound);
    map.on('locationfound', eventLocation);
  }
}
