import { Component, computed, inject } from '@angular/core';
import { Device_1 } from '../device/device-1/device-1';
import { DeviceFilterService } from '../services/device-filter.service';
import { DeviceStatusService } from '../services/device-status.service';

@Component({
  selector: 'MainPage',
  imports: [Device_1],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage {
  anyDrawerOpen = false;
  private openDrawersCount = 0;
  private filterService = inject(DeviceFilterService);
  private deviceStatusService = inject(DeviceStatusService);

  filteredDeviceGroups = computed(() => {
    const filter = this.filterService.selectedFilter();
    if (filter === 'All') {
      return this.deviceStatusService.device_status().device_groups;
    }
    return this.deviceStatusService.device_status().device_groups.filter((group) => group.type === filter);
  });

  onDrawerStateChange(isOpen: boolean) {
    if (isOpen) {
      this.openDrawersCount++;
    } else {
      this.openDrawersCount = Math.max(0, this.openDrawersCount - 1);
    }
    this.anyDrawerOpen = this.openDrawersCount > 0;
  }
}
