var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OpenDataParisServices } from '../../services/OpenDataParisServices';
var ListEventsComponent = /** @class */ (function () {
    function ListEventsComponent(api) {
        this.api = api;
        this.isLoaded = false;
    }
    ListEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // api OpenDataParis call
        this.api.getAllWD().subscribe(function (response) {
            _this.data = response;
            // Flag for the ngIf in the HTML
            _this.isLoaded = true;
            // format timetable field
            _this.events = _this.data.records.map(eventFormat);
            // this.events = this.data.records;
            // sort events list
            _this.eventsSorted = eventSort(_this.events);
            _this.api.setFilteredArray(_this.eventsSorted);
        });
    };
    ListEventsComponent = __decorate([
        Component({
            selector: 'app-list-events',
            templateUrl: './list-events.component.html',
            styleUrls: ['./list-events.component.css']
        }),
        __metadata("design:paramtypes", [OpenDataParisServices])
    ], ListEventsComponent);
    return ListEventsComponent;
}());
export { ListEventsComponent };
// cast the hour of the event
var eventFormat = function (event) {
    console.log(event.fields.timetable);
    // event.fields.timetable = event.fields.timetable.slice(11, 16);
    return event;
};
// sort the list of events by started hour
var eventSort = function (eventsIn) {
    var eventsOut = []; // sorted array
    var alreadySort = []; // array of index of event already sorted
    var tempHour;
    var index;
    while (eventsOut.length !== eventsIn.length) {
        index = 0;
        tempHour = '24:00'; // 24:00
        // boucle sur la liste pour voir si un événement ne commence pas plus tôt
        for (var j = 0; j < eventsIn.length; j++) {
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
//# sourceMappingURL=list-events.component.js.map