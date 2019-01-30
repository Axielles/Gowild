import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.css']
})
export class EventBoardComponent implements OnInit {
  @Input() event: any;
  @Input() index: any;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
    console.log(this.index);
  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
    // console.log(this.isCollapsed);
  }

}
