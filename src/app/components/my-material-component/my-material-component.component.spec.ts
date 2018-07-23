import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../modules/material.module';
import { MyMaterialComponentComponent } from './my-material-component.component';

describe('MyMaterialComponentComponent', () => {
  let component: MyMaterialComponentComponent;
  let fixture: ComponentFixture<MyMaterialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ MyMaterialComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMaterialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
