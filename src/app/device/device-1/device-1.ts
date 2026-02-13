import { Component, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'Device_1',
  imports: [CommonModule, MatChipsModule, MatCardModule, MatProgressBarModule, MatExpansionModule, MatButtonModule],
  templateUrl: './device-1.html',
  styleUrls: ['./device-1.scss'],
})
export class Device_1 {
  panelOpen = false;
  @Output() drawerStateChange = new EventEmitter<boolean>();

  onPanelToggle(opened: boolean) {
    this.panelOpen = opened;
    this.drawerStateChange.emit(opened);
  }
}
