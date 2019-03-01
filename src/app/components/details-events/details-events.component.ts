import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LeafletService } from '../../services/Leaflet.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-details-events',
  templateUrl: './details-events.component.html',
  styleUrls: ['./details-events.component.css']
})

export class DetailsEventsComponent implements OnInit, OnDestroy {
  @Input() event: Event;
  @Input() index: number;

  constructor(private leaflet: LeafletService) { }

  ngOnInit() {
    this.leaflet.onCall(this.event.latlon);
  }

  ngOnDestroy() {
    console.log( 'dans ngOnDestroy' );
  }
}
