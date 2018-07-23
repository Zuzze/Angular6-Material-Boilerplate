import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
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
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
  ],
  // Services are provided
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
