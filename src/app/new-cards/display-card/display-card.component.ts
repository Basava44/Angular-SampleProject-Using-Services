import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevicesDataService } from 'src/app/devicesData.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCardComponent implements OnInit, OnDestroy {
  constructor(private deviceDataService: DevicesDataService) {}

  deviceData: any = {};
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.deviceDataService.selectedDevice.subscribe((data) => {
      this.deviceData = data;
    });
  }

  close() {
    this.deviceDataService.show.next(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
