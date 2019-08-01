var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var OpenDataParisServices = /** @class */ (function () {
    function OpenDataParisServices(http) {
        this.http = http;
        this.dataFiltered = [];
        this.URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-';
        this.qField = "&q=date_start+%3C%3D+%23now()+AND+date_end+%3E%3D+%23now()&sort=-date_start&rows=2000";
        this.todaysDate = new Date().toISOString();
        this.todaysDateAPIForm = this.todaysDate.slice(0, 10);
        this.currentYearAPIForm = this.todaysDateAPIForm.slice(0, 4);
        this.urlBase = "" + this.URL + this.qField;
        // tslint:disable-next-line:max-line-length
        this.urlBaseWithoutDate = this.URL + "&rows=1000&refine.date_start=" + this.currentYearAPIForm;
    }
    OpenDataParisServices.prototype.getConcerts = function () {
        return this.http.get(this.urlBase + "&refine.tags=concert");
    };
    OpenDataParisServices.prototype.getExpositions = function () {
        return this.http.get(this.urlBase + "&refine.tags=exposition");
    };
    OpenDataParisServices.prototype.getTheaters = function () {
        return this.http.get(this.urlBase + "&refine.tags=theatre");
    };
    OpenDataParisServices.prototype.getClubbings = function () {
        return this.http.get(this.urlBase + "&refine.tags=clubbing");
    };
    OpenDataParisServices.prototype.getShows = function () {
        return this.http.get(this.urlBase + "&refine.tags=spectacle");
    };
    OpenDataParisServices.prototype.getCinemas = function () {
        return this.http.get(this.urlBase + "&refine.tags=cinema");
    };
    OpenDataParisServices.prototype.getConferences = function () {
        return this.http.get(this.urlBase + "&refine.tags=conference");
    };
    OpenDataParisServices.prototype.getAll = function () {
        console.log(this.urlBase);
        return this.http.get("" + this.urlBase);
    };
    OpenDataParisServices.prototype.getConcertsWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=concert");
    };
    OpenDataParisServices.prototype.getExpositionsWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=exposition");
    };
    OpenDataParisServices.prototype.getTheatersWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=theatre");
    };
    OpenDataParisServices.prototype.getClubbingsWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=clubbing");
    };
    OpenDataParisServices.prototype.getShowsWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=spectacle");
    };
    OpenDataParisServices.prototype.getCinemasWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=cinema");
    };
    OpenDataParisServices.prototype.getConferencesWD = function () {
        return this.http.get(this.urlBaseWithoutDate + "&refine.tags=conference");
    };
    OpenDataParisServices.prototype.getAllWD = function () {
        console.log(this.urlBase);
        return this.http.get("" + this.urlBaseWithoutDate);
    };
    OpenDataParisServices.prototype.setFilteredArray = function (data) {
        return this.dataFiltered = data;
    };
    OpenDataParisServices.prototype.getEventById = function (id) {
        var data = this.dataFiltered[id];
        return data;
    };
    OpenDataParisServices = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], OpenDataParisServices);
    return OpenDataParisServices;
}());
export { OpenDataParisServices };
//# sourceMappingURL=OpenDataParisServices.js.map