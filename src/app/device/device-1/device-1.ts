import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'Device_1',
  imports: [CommonModule, MatChipsModule, MatCardModule, MatProgressBarModule],
  templateUrl: './device-1.html',
  styleUrls: ['./device-1.scss'],
})
export class Device_1 {

}
