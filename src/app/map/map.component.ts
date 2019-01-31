import { Component, OnInit, Input } from '@angular/core';
import { MapServices } from '../services/map.services';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;
  position: Position;
  @Input() event: any;

  constructor(private gps: MapServices) {
    this.gps.findme();
  }

  ngOnInit() {
    this.position = this.gps.position;

    const map = L.map('map').setView([this.position.coords.latitude, this.position.coords.longitude], 11);

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
      L.marker(this.event.fields.latlon,
        {icon: myIcon}).bindPopup('Votre événement').addTo(map).openPopup();
    };

    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
    map.locate({setView: true, maxZoom: 11});

    map.on('locationfound', onLocationFound);
    map.on('locationfound', eventLocation);
  }

}
