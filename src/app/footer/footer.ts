import { Component, signal } from '@angular/core';
import { DeviceStatusService } from '../services/device-status.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']  ,
})
export class Footer {
  version = signal<string>('1.0.0');
  documentation_link = signal<string>('https://example.com/documentation');
  email = signal<string>('support@example.com');
  chatroom = signal<string>('https://example.com/chatroom');
}
