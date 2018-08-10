import { TestBed, inject } from '@angular/core/testing';
import { CalendarService } from './calendar.service';
import * as moment from 'moment';

describe('CalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService]
    });
  });

  it('should be created', inject(
    [CalendarService],
    (service: CalendarService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('test getDatesArray', inject(
    [CalendarService],
    (service: CalendarService) => {
      const days = service.getDatesArray(
        new Date('08.01.2003'),
        new Date('08.04.2003')
      );

      expect(days).toEqual([
        new Date('08.01.2003'),
        new Date('08.02.2003'),
        new Date('08.03.2003'),
        new Date('08.04.2003')
      ]);
    }
  ));

  it('test getDays', inject([CalendarService], (service: CalendarService) => {
    const days = service.getDays(8, 2018);

    expect(days.length).toBe(35);
  }));
});
