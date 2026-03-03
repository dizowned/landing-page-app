import { TestBed } from '@angular/core/testing';

import { DeviceStatusService } from './device-status.service';

describe('DeviceStatusService', () => {
  let service: DeviceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
