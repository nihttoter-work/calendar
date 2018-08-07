import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day';
import { Observable } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-calendar-title',
  templateUrl: './calendar-title.component.html',
  styleUrls: ['./calendar-title.component.scss']
})
export class CalendarTitleComponent implements OnInit {
  days: Observable<Day[]>;

  constructor() { }

  ngOnInit() {
  }

}
