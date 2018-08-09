import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDayPipe } from './pipes/get-day.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [GetDayPipe],
  exports: [GetDayPipe]
})
export class SharedModule {}
