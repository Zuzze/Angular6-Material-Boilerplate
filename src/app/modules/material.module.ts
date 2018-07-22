// import here Material Design Components that you are using in your app
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

const modules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
