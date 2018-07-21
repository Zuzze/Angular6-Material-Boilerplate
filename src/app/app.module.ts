import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  // Components are declared
  declarations: [
    AppComponent
  ],
  // Modules are imported
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  // Services are provided
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
