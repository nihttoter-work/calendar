import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarTitleComponent } from './components/calendar-title/calendar-title.component';
import { DayComponent } from './components/day/day.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarComponent, CalendarTitleComponent, DayComponent]
})
export class CalendarModule { }
