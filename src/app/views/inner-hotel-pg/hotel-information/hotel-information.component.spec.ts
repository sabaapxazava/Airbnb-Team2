import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInformationComponent } from './hotel-information.component';

describe('HotelInformationComponent', () => {
  let component: HotelInformationComponent;
  let fixture: ComponentFixture<HotelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
