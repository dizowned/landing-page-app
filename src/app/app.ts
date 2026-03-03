import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DeviceFilterService } from './services/device-filter.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('landing-page-app');
  protected sidenavOpen = signal(true);

  private filterService = inject(DeviceFilterService);
  protected deviceTypes = this.filterService.deviceTypes;
  protected selectedFilter = this.filterService.selectedFilter;

  toggleSidenav(): void {
    this.sidenavOpen.update((open) => !open);
  }

  selectFilter(filter: string): void {
    this.filterService.selectFilter(filter);
  }
}
