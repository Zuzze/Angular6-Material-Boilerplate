import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from './modules/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
// note that in  larger apps it is not a good practice to have all components inside app.component.ts

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TableComponent,
        CardComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
