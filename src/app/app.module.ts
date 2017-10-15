import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TodosComponent } from './todos/todos.component';
import { QuotesComponent } from './quotes/quotes.component';
import { GreetingComponent } from './greeting/greeting.component';
import { MainFocusComponent } from './main-focus/main-focus.component';
import { LinksComponent } from './links/links.component';
import { WeatherComponent } from './weather/weather.component';
import { JapanComponent } from './japan/japan.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TodosComponent,
    QuotesComponent,
    GreetingComponent,
    MainFocusComponent,
    LinksComponent,
    WeatherComponent,
    JapanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
