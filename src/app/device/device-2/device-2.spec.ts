import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device2 } from './device-2';

describe('Device2', () => {
  let component: Device2;
  let fixture: ComponentFixture<Device2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Device2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Device2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
