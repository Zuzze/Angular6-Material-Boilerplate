import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from './modules/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MyMaterialComponentComponent } from './components/my-material-component/my-material-component.component';
import { DataTableComponent} from './components/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        MyMaterialComponentComponent,
        DataTableComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
