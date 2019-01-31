import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  frDate: string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {
    // formatage de la date
    this.frDate = this.frenchDate();
   }

  ngOnInit() {
  }

  // display a date in the french format
  frenchDate = (date = new Date()) => {
    const weekDay = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
      'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const space = ' ';

    // récupération du jour de la semaine, du mois et de l'année en français
    return weekDay[date.getUTCDay()] + space
      + date.getUTCDate() + space
      + month[date.getMonth()] + space
      + date.getFullYear();
  }

}

