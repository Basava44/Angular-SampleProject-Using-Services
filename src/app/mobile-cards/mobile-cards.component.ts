import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServices } from '../dataServices.service';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-mobile-cards',
  templateUrl: './mobile-cards.component.html',
  styleUrls: ['./mobile-cards.component.scss'],
})
export class MobileCardsComponent implements OnInit, OnDestroy {
  devices:{
    name: string;
    price: string;
    ram: string;
    rom: string;
    color: string;
    display: string;
    processor: string;
  }[] = [];

  constructor(private Data: MobileServices, private MobileDataServices:DataServices) {
    this.devices = Data.devices;
  }

  ngOnInit() {
    this.Data.mobileData$.subscribe((data) => {
      this.devices = data;
    });
  }

  ngOnDestroy(){
    if(this.devices.length === 0)
      this.MobileDataServices.clearData();
  }
  

}
