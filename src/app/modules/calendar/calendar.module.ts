import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarTitleComponent } from './components/calendar-title/calendar-title.component';
import { DayComponent } from './components/day/day.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CalendarComponent,
    CalendarTitleComponent,
    DayComponent,
    CalendarHeaderComponent
  ]
})
export class CalendarModule {}
