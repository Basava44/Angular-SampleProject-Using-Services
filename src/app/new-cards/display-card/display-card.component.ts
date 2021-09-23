import { Component, OnInit } from '@angular/core';
import { DevicesDataService } from 'src/app/devicesData.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
})
export class DisplayCardComponent implements OnInit {
  constructor(private deviceDataService: DevicesDataService) {}

  deviceData: any = {};

  ngOnInit(): void {
    this.deviceDataService.selectedDevice.subscribe((data) => {
      this.deviceData = data;
    });
  }

  close(){
    this.deviceDataService.show.next(false);
  }
}
