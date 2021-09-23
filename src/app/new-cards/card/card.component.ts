import { Component, Input, OnInit } from '@angular/core';
import { DevicesDataService } from 'src/app/devicesData.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private deviceDataService:DevicesDataService) {}

  @Input() deviceData: any = [];

  async display(){
    this.deviceDataService.show.next(true);
    await setTimeout(() => {
      this.deviceDataService.selectedDevice.next(this.deviceData);
    }, 1);
  }
}
