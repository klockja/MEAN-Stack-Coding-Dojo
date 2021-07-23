import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDcComponent } from './city-dc.component';

describe('CityDcComponent', () => {
  let component: CityDcComponent;
  let fixture: ComponentFixture<CityDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
