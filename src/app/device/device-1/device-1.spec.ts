import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device_1 } from './device-1';

describe('Device_1', () => {
  let component: Device_1;
  let fixture: ComponentFixture<Device_1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Device_1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Device_1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
