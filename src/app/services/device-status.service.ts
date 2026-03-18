import { Injectable, signal } from '@angular/core';
import { Devices } from '../types/devices';
import device_list from '../../../public/assets/config/devices.json';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceStatusService {
device_status_url = signal<string>('assets/config/devices.json');
device_status = signal<Devices>({
  device_groups: []
});

  constructor(private http: HttpClient) {
    this.fetchDeviceStatus();
  }

  private fetchDeviceStatus() {
    this.http.get<Devices>(this.device_status_url()).pipe(
      catchError((error) => {
        console.error('Error fetching device status:', error);
        this.device_status.set(device_list as unknown as Devices);
        return of(device_list as unknown as Devices);
      })
    ).subscribe((data) => {
      this.device_status.set(data);
    });
  }

}
