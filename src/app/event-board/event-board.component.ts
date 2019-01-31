import { Component, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.css']
})
export class EventBoardComponent{
  @Input() event: any;
  @Input() index: number;
  isCollapsed = true;

  constructor() { }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  onReClick() {
    this.isCollapsed = !this.isCollapsed;
  }
}
