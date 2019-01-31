import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-events',
  templateUrl: './details-events.component.html',
  styleUrls: ['./details-events.component.css']
})

export class DetailsEventsComponent {
  @Input() event: Event;
  @Input() index: number;
}
