import { Injectable, signal, computed } from '@angular/core';
import deviceList from '../../config/devices.json';

@Injectable({
  providedIn: 'root',
})
export class DeviceFilterService {
  readonly selectedFilter = signal<string>('All');

  readonly deviceTypes = computed<string[]>(() => {
    const types = deviceList.device_groups.map((group) => group.type);
    return [...new Set(types)];
  });

  selectFilter(filter: string): void {
    this.selectedFilter.set(filter);
  }
}
