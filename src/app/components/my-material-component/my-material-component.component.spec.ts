import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMaterialComponentComponent } from './my-material-component.component';

describe('MyMaterialComponentComponent', () => {
  let component: MyMaterialComponentComponent;
  let fixture: ComponentFixture<MyMaterialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
