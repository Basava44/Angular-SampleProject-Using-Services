import { Component, OnInit } from '@angular/core';
import { MobileServices } from '../mobile-data.service';
import { MobileData } from '../mobileData.module';

@Component({
  selector: 'app-mobile-cards',
  templateUrl: './mobile-cards.component.html',
  styleUrls: ['./mobile-cards.component.scss'],
})
export class MobileCardsComponent implements OnInit {
  devices: MobileData[] = [];

  data:string = '';
  search: boolean = false;
  searchCount!:number;

  onsearch(){
    this.search = !this.search;
  }

  constructor(private Data: MobileServices) {
    Data.fetchData();
  }

  ngOnInit() {
    this.Data.mobileData.subscribe((data) => {
      this.devices = data;
    });
  }

}
