import { Component, Input } from '@angular/core';
import { LeafletService } from '../../services/Leaflet.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  @Input() latlon: any;

  constructor( private leaflet: LeafletService ) {
  }

  onDisplay() {
    this.leaflet.onCall(this.latlon);
  }
}
