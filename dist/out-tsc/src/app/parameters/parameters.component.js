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
import { OpenDataParisServices } from '../services/OpenDataParisServices';
var ParametersComponent = /** @class */ (function () {
    function ParametersComponent(openDataParisService) {
        var _this = this;
        this.openDataParisService = openDataParisService;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
        this.gratuitType = false;
        this.payantType = false;
        this.regexGratuit = /gratuit|Gratuit|libre/;
        this.regexPayant = /€|euros|Euros/;
        this.isgood = false;
        this.dateFormIsValid = false;
        this.isLoading = false;
        this.noEvents = false;
        this.secondFilter = function (eventType) {
            if (_this.inputDate != null) {
                if (_this.gratuitType) {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return _this.regexGratuit.test(event.fields.pricing_info) &&
                        event.fields.date_start === _this.inputDate; });
                }
                else if (_this.payantType) {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return _this.regexPayant.test(event.fields.pricing_info) &&
                        event.fields.date_start === _this.inputDate; });
                }
                else {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return event.fields.date_start === _this.inputDate; });
                }
            }
            else {
                if (_this.gratuitType === true) {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return _this.regexGratuit.test(event.fields.pricing_info) &&
                        event.fields.date_start === _this.openDataParisService.todaysDateAPIForm; });
                }
                else if (_this.payantType === true) {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return _this.regexPayant.test(event.fields.pricing_info) &&
                        event.fields.date_start === _this.openDataParisService.todaysDateAPIForm; });
                }
                else {
                    _this.eventTypePricing = eventType.records.filter(function (event) { return event.fields.date_start === _this.openDataParisService.todaysDateAPIForm; });
                }
            }
            return _this.eventTypePricing;
        };
        this.isThereNoEvents = function (isgood, result) {
            if (isgood === true && result.length === 0) {
                isgood = false;
                _this.noEvents = true;
            }
        };
    }
    ParametersComponent.prototype.ngOnInit = function () {
        this.today = this.openDataParisService.todaysDateAPIForm;
    };
    ParametersComponent.prototype.changeConcertsFlag = function () {
        this.concertType = !this.concertType;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeExpositionsFlag = function () {
        this.expositionType = !this.expositionType;
        this.concertType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeTheatersFlag = function () {
        this.theaterType = !this.theaterType;
        this.concertType = false;
        this.expositionType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeClubbingsFlag = function () {
        this.clubbingType = !this.clubbingType;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeShowsFlag = function () {
        this.showType = !this.showType;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.cinemaType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeCinemasFlag = function () {
        this.cinemaType = !this.cinemaType;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.conferenceType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeConferencesFlag = function () {
        this.conferenceType = !this.conferenceType;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.otherType = false;
    };
    ParametersComponent.prototype.changeOthersFlag = function () {
        this.otherType = !this.otherType;
        this.concertType = false;
        this.expositionType = false;
        this.theaterType = false;
        this.clubbingType = false;
        this.showType = false;
        this.cinemaType = false;
        this.conferenceType = false;
    };
    ParametersComponent.prototype.changeGratuitsFlag = function () {
        this.gratuitType = !this.gratuitType;
        this.payantType = false;
    };
    ParametersComponent.prototype.changePayantsFlag = function () {
        this.payantType = !this.payantType;
        this.gratuitType = false;
    };
    ParametersComponent.prototype.handleDateChange = function () {
        var userInputElement = document.getElementById('userInput');
        this.inputDate = userInputElement.value; // userInputElement.innerText || userInputElement.textContent;
        if (this.inputDate.length === 10) {
            this.dateFormIsValid = true;
        }
        else {
            this.dateFormIsValid = false;
            this.inputDate = null;
        }
    };
    ParametersComponent.prototype.returnSearchResults = function () {
        var _this = this;
        this.isgood = false;
        this.noEvents = false;
        this.isLoading = true;
        if (this.concertType) {
            this.openDataParisService.getConcertsWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.expositionType) {
            this.eventType = this.openDataParisService.getExpositionsWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.theaterType) {
            this.eventType = this.openDataParisService.getTheatersWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.clubbingType) {
            this.eventType = this.openDataParisService.getClubbingsWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.showType) {
            this.eventType = this.openDataParisService.getShowsWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.cinemaType) {
            this.eventType = this.openDataParisService.getCinemasWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else if (this.conferenceType) {
            this.eventType = this.openDataParisService.getConferencesWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
        else {
            this.openDataParisService.getAllWD().subscribe(function (response) {
                _this.eventType = response;
                _this.result = _this.secondFilter(_this.eventType);
                _this.isLoading = false;
                _this.isgood = true;
                _this.isThereNoEvents(_this.isgood, _this.result);
            });
        }
    };
    ParametersComponent = __decorate([
        Component({
            selector: 'app-parameters',
            templateUrl: './parameters.component.html',
            styleUrls: ['./parameters.component.css']
        }),
        __metadata("design:paramtypes", [OpenDataParisServices])
    ], ParametersComponent);
    return ParametersComponent;
}());
export { ParametersComponent };
//# sourceMappingURL=parameters.component.js.map