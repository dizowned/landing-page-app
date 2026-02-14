import { Component } from '@angular/core';
import { Device_1 } from '../device/device-1/device-1';
import device_list from '../../config/devices.json';

@Component({
  selector: 'MainPage',
  imports: [Device_1],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage {
  anyDrawerOpen = false;
  private openDrawersCount = 0;
  device_list = device_list;

  onDrawerStateChange(isOpen: boolean) {
    if (isOpen) {
      this.openDrawersCount++;
    } else {
      this.openDrawersCount = Math.max(0, this.openDrawersCount - 1);
    }
    this.anyDrawerOpen = this.openDrawersCount > 0;
  }
}
