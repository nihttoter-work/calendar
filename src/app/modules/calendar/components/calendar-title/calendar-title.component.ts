import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../models/day';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-calendar-title',
  templateUrl: './calendar-title.component.html',
  styleUrls: ['./calendar-title.component.scss']
})
export class CalendarTitleComponent implements OnInit {
  @Input()
  year: string;
  @Input()
  month: string;

  @Output()
  leftClick: EventEmitter<any> = new EventEmitter();
  @Output()
  rightClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onLeftClick() {
    this.leftClick.next();
  }

  onRightClick() {
    this.rightClick.next();
  }
}
