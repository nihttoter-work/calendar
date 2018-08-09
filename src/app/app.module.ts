import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CalendarModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
