import { Component, Input, OnInit } from '@angular/core';
import { DevicesDataService } from 'src/app/devicesData.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private deviceDataService: DevicesDataService) {}

  @Input() deviceData: any = [];

  count: number = 0;

  // ngOnInit(){
  //   this.deviceDataService.compareCount.subscribe(
  //     data => {
  //       this.count = data;
  //       console.log(data);
  //     }
  //   )
  // }

  async display() {
    this.deviceDataService.show.next(true);
    await setTimeout(() => {
      this.deviceDataService.selectedDevice.next(this.deviceData);
    }, 1);
  }

  selected: boolean = false;

  selectedItem(){
    this.selected = ! this.selected;
    if(this.selected)
    {
      this.deviceDataService.addToCompare(this.deviceData);
    }
    else{
      this.deviceDataService.removeFromCompare(this.deviceData);
    }
  }
}
