import { Component, OnInit } from '@angular/core';
import { OpenDataParisServices } from '../../services/OpenDataParisServices';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})

export class ListEventsComponent implements OnInit {
  isLoaded = false;
  data: any;
  events: [any];
  eventsSorted: Array<any>;
  frDate: string;

  constructor(private api: OpenDataParisServices) {
  }

  ngOnInit() {
    // api OpenDataParis call
    this.api.getAllWD().subscribe((response) => {
      this.data = response;
      // Flag for the ngIf in the HTML
      this.isLoaded = true;
      // format timetable field
      this.events = this.data.records.map(eventFormat);
      // this.events = this.data.records;
      // sort events list
      this.eventsSorted = eventSort(this.events);
      this.api.setFilteredArray(this.eventsSorted);
    });
  }

}

// cast the hour of the event
const eventFormat = (event: any) => {
  console.log(event.fields.timetable);
  // event.fields.timetable = event.fields.timetable.slice(11, 16);
  return event;
};

// sort the list of events by started hour
const eventSort = (eventsIn: [any]) => {

  const eventsOut: Array<any> = [];      // sorted array
  const alreadySort: Array<number> = []; // array of index of event already sorted
  let tempHour: string;
  let index: number;

  while (eventsOut.length !== eventsIn.length) {
    index = 0;
    tempHour = '24:00'; // 24:00
    // boucle sur la liste pour voir si un événement ne commence pas plus tôt
    for (let j = 0; j < eventsIn.length; j++) {
      if (!alreadySort.includes(j) && eventsIn[j].fields.timetable <= tempHour) {
        tempHour = eventsIn[j].fields.timetable;
        index = j;
      } // endif
    } // endfor
    // fill the new array with de next time event
    eventsOut.push(eventsIn[index]);
    alreadySort.push(index);
  } // end while

  return eventsOut;
};
