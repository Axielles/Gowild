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
import { WhereIAmService } from './WhereIAm.service';
import * as L from 'leaflet';
var LeafletService = /** @class */ (function () {
    function LeafletService(gps) {
        this.gps = gps;
    }
    LeafletService.prototype.onCall = function (latlon) {
        var _this = this;
        // My position from WhereIAm service
        this.myPosition = this.gps.getPosition().then(function (position) {
            console.log("Ma position: " + position.lng + " " + position.lat);
            _this.myPosition = position;
            console.log('Ma position dans myPosition', _this.myPosition);
        });
        console.log('Coordonnées de l\'évènement', latlon[0], latlon[1]);
        //    const map = L.map('map').setView([latlon[0], latlon[1]], 11);
        var map = L.map('map').setView([2.354074, 48.855688], 11);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Carte de Paris'
        }).addTo(map);
        function onLocationFound(e) {
            var myIcon = L.icon({
                iconUrl: '../assets/images/marker-icon-red.png'
            });
            L.marker([e.latitude, e.longitude], { icon: myIcon }).bindPopup('Vous êtes ici').addTo(map).openPopup();
        }
        var eventLocation = function () {
            var myIcon = L.icon({
                iconUrl: '../assets/images/marker-icon-black.png'
            });
            L.marker(latlon, { icon: myIcon }).bindPopup('Votre événement').addTo(map).openPopup();
        };
        function onLocationError(e) {
            alert(e.message);
        }
        map.on('locationerror', onLocationError);
        map.locate({ setView: true, maxZoom: 11 });
        map.on('locationfound', onLocationFound);
        map.on('locationfound', eventLocation);
    };
    LeafletService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [WhereIAmService])
    ], LeafletService);
    return LeafletService;
}());
export { LeafletService };
//# sourceMappingURL=Leaflet.service.js.map