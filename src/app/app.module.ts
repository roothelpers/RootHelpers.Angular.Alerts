import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootHelpersAlertsComponent } from './root-helpers-alerts/root-helpers-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    RootHelpersAlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
