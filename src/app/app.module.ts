import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { MyMaterialComponentComponent } from './components/my-material-component/my-material-component.component';
import { HttpClient } from '@angular/common/http/src/client';
import { DataServiceService } from './services/data-service.service';
import { TableComponent } from './components/table/table.component';


// note that in bigger applications it is recommended to divide app
// into modules and import them instead of declaring specific components

@NgModule({
  // Components are declared
  declarations: [
    AppComponent,
    MyMaterialComponentComponent,
    TableComponent
  ],
  // Modules are imported
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // Services are provided
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
