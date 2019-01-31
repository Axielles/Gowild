import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-events',
  templateUrl: './details-events.component.html',
  styleUrls: ['./details-events.component.css']
})

export class DetailsEventsComponent implements OnInit {
  @Input() event: any;
  @Input() index: number;

  ngOnInit () {
    console.log(this.event.latlon);
  }
}
