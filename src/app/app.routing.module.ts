import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './modules/calendar/components/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: ':year/:month', component: CalendarComponent },
  { path: '**', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
