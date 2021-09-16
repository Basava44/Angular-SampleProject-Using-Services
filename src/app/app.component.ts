import { Component, OnInit } from '@angular/core';
import { MobileServices } from './mobile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  devices: {
    name: string;
    price: string;
    ram: string;
    rom: string;
    color: string;
    display: string;
    processor: string;
  }[] = [];

  constructor(private Data: MobileServices) {
    this.devices = Data.devices;
  }

  ngOnInit() {
    this.Data.mobileData$.subscribe((data) => {
      this.devices = data;
    });
  }
}
