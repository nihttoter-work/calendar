import { Injectable } from '@angular/core';
import { Day } from '../models/day';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor() {}

  getDays(
    month: number = moment().get('month'),
    year: number = moment().get('year')
  ): Day[] {
    const startDay = moment(`${month.toString()}/01/${year.toString()}`)
      .startOf('isoWeek')
      .toDate();

    const endDay = moment(`${month.toString()}/01/${year.toString()}`)
      .endOf('month')
      .endOf('isoWeek')
      .toDate();
    return this.getDatesArray(startDay, endDay).map(
      date =>
        <Day>{
          date: date,
          events: []
        }
    );
  }

  getDatesArray(dateFrom: Date, dateTo: Date): Date[] {
    const days = [];
    let day = moment(dateFrom);

    while (day <= moment(dateTo)) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    return days;
  }
}
