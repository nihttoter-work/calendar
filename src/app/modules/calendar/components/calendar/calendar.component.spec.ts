import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { CalendarTitleComponent } from '../calendar-title/calendar-title.component';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { DayComponent } from '../day/day.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        CalendarTitleComponent,
        CalendarHeaderComponent,
        DayComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
