import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'getDay'
})
export class GetDayPipe implements PipeTransform {
  transform(value: Date, args?: any): any {
    if (!value) {
      return null;
    }
    return moment(value).format('DD');
  }
}
