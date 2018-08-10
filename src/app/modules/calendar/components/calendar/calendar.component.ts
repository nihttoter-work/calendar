import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { Day } from '../../models/day';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  year: string;
  month: string;
  monthName: string;
  days: Day[] = [];

  constructor(
    private calendarService: CalendarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { year: string; month: string }) => {
      this.year = params.year
        ? params.year
        : moment()
            .get('year')
            .toString();
      this.month = params.month ? params.month : moment().format('MM');

      this.monthName = params.month
        ? moment(params.month, 'MM').format('MMMM')
        : moment().format('MMMM');

      this.days = this.calendarService.getDays(
        parseInt(this.month, 10),
        parseInt(this.year, 10)
      );
    });
  }

  leftClick() {
    this.router.navigate([
      moment(`${this.year}/${this.month}`, 'YYYY/MM')
        .subtract(1, 'month')
        .format('YYYY/MM')
    ]);
  }
  rightClick() {
    this.router.navigate([
      moment(`${this.year}/${this.month}`, 'YYYY/MM')
        .add(1, 'month')
        .format('YYYY/MM')
    ]);
  }
}
