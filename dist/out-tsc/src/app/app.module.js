var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ParametersComponent } from './parameters/parameters.component';
import { DetailsEventsComponent } from './components/details-events/details-events.component';
import { MapComponent } from './components/map/map.component';
import { EventBoardComponent } from './components/event-board/event-board.component';
import { WhereIAmService } from './services/WhereIAm.service';
import { LeafletService } from './services/Leaflet.service';
import { OpenDataParisServices } from './services/OpenDataParisServices';
var appRoutes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'events', component: ListEventsComponent },
    { path: 'param', component: ParametersComponent },
    { path: 'events/:id', component: DetailsEventsComponent },
    { path: '**', component: HomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                ListEventsComponent,
                FooterComponent,
                HomeComponent,
                ParametersComponent,
                DetailsEventsComponent,
                MapComponent,
                EventBoardComponent
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes),
                NgbModule.forRoot(),
                HttpClientModule
            ],
            providers: [
                OpenDataParisServices,
                WhereIAmService,
                LeafletService
            ],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map