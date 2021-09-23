import { Component, OnInit } from '@angular/core';
import { DevicesDataService } from '../devicesData.service';

@Component({
  selector: 'app-new-cards',
  templateUrl: './new-cards.component.html',
  styleUrls: ['./new-cards.component.scss'],
})
export class NewCardsComponent implements OnInit {
  constructor(private mobileData: DevicesDataService) {}

  MobileDataBase: any = this.mobileData.brands;
  devices: any = [];
  brandNames: string[] = [];
  data: string = '';

  ngOnInit(): void {
    for (let i in this.MobileDataBase) {
      this.devices.push(this.MobileDataBase[i]);
      this.brandNames.push(i);
    }
    this.mobileData.show.subscribe((data) => (this.show = data));
  }

  filter: boolean = false;
  onSearch(){
    this.filter = !this.filter;
  }


  show: boolean = false;
}
