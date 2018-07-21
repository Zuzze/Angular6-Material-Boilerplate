import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { MyMaterialComponentComponent } from './components/my-material-component/my-material-component.component';

// note that in bigger applications it is recommended to divide app
// into modules and import them instead of declaring specific components

@NgModule({
  // Components are declared
  declarations: [
    AppComponent,
    MyMaterialComponentComponent
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
