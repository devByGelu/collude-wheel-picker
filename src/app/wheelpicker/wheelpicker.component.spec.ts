import { ComponentFixture, TestBed } from '@angular/core/testing';

import WheelpickerComponent from './wheelpicker.component';

describe('WheelpickerComponent', () => {
  let component: WheelpickerComponent;
  let fixture: ComponentFixture<WheelpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelpickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
