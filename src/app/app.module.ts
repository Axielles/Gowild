import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const appRoutes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'events', component: ListEventsComponent },
  { path: 'param', component: ParametersComponent },
  { path: 'events/:id', component: DetailsEventsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
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
export class AppModule { }
