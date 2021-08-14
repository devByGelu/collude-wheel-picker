import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelpickerOptionComponent } from './wheelpicker-option.component';

describe('WheelpickerOptionComponent', () => {
  let component: WheelpickerOptionComponent;
  let fixture: ComponentFixture<WheelpickerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelpickerOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelpickerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
