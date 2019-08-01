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
var WhereIAmService = /** @class */ (function () {
    function WhereIAmService() {
        /* 29 rue Louis Blanc
          Latitude: 48.86528
          Longitude: 2.3789568 */
        this.isLocated = false;
    }
    WhereIAmService.prototype.getPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, function (err) {
                reject(err);
            });
        });
    };
    WhereIAmService.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.position = position;
                _this.isLocated = true;
                console.log('Dans le test navigator.geolocation ok', navigator);
            });
        }
        else {
            alert('Geolocation non supportée par le navigateur.');
            this.position = null;
            this.isLocated = false;
        }
        console.log('sortie findMe() Located: ', this.isLocated);
        return this.position;
    };
    WhereIAmService.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                _this.position = position;
                _this.isLocated = true;
            });
        }
        else {
            alert('Geolocation non supportée par le navigateur.');
            this.isLocated = false;
        }
        return this.position;
    };
    WhereIAmService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WhereIAmService);
    return WhereIAmService;
}());
export { WhereIAmService };
//# sourceMappingURL=WhereIAm.service.js.map