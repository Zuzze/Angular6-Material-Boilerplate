import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { HttpClient } from '@angular/common/http/src/client';
import { DataServiceService } from './services/data-service.service';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';


// note that in bigger applications it is recommended to divide app
// into modules and import them instead of declaring specific components

@NgModule({
  // Components are declared
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent
  ],
  // Modules are imported
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // Services are provided
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
