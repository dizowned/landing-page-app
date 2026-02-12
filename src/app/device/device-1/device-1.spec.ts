import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device1 } from './device-1';

describe('Device1', () => {
  let component: Device1;
  let fixture: ComponentFixture<Device1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Device1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Device1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
