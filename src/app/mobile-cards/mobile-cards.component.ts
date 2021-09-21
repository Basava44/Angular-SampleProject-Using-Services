import { Component, OnInit } from '@angular/core';
import { DataServices } from '../dataServices.service';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-mobile-cards',
  templateUrl: './mobile-cards.component.html',
  styleUrls: ['./mobile-cards.component.scss'],
})
export class MobileCardsComponent implements OnInit {
  devices:{
    name: string;
    price: string;
    ram: string;
    rom: string;
    color: string;
    display: string;
    processor: string;
  }[] = [];

  // devices:object[]=[];

  constructor(private Data: MobileServices) {
    Data.fetchData(); 
  }

  ngOnInit() {
    this.Data.mobileData$.subscribe((data) => {
      this.devices = data;
    });  
  }
  

}
