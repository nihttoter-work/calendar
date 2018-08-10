import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Day } from '../../models/day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days: Day[] = this.calendarService.getDays();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {}
}
