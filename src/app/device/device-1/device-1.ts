import { Component, computed, output } from '@angular/core'
import { input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'Device_1',
  imports: [CommonModule, MatChipsModule, MatCardModule, MatProgressBarModule, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './device-1.html',
  styleUrls: ['./device-1.scss'],
})
export class Device_1 {
  panelOpen = false;
  drawerStateChange = output<boolean>();
  name = input<string>('Device Name');
  status = input<boolean>(false);
  url = input<string>('http://www.example.com');
  description = input<string>('Default Description');

  isActive = computed(() => {
    return this.status()
  });

  onPanelToggle(opened: boolean) {
    this.panelOpen = opened;
    this.drawerStateChange.emit(opened);
  }
}
