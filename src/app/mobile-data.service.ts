import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataServices } from './dataServices.service';
import { MobileData } from './mobileData.module';

@Injectable({ providedIn: 'root' })
export class MobileServices {
  constructor(private dataServices: DataServices) {}

  fetchData() {
    const getData = this.dataServices.getData();
    getData.subscribe((data) => {
      this.devices = data;
      this._count.next(this.devices.length);
      this._mobileData.next(this.devices);
    });
    console.log('Data Fetched');
  }

  devices: MobileData[] = [];

  // devices = [
  //   {
  //     name: 'Poco F1',
  //     price: '16000',
  //     ram: '6GB',
  //     rom: '64GB',
  //     color: 'Blue',
  //     display: '6 inch',
  //     processor: 'Snapdragon',
  //   },
  //   {
  //     name: 'Mi Note 10',
  //     price: '14000',
  //     ram: '4GB',
  //     rom: '128GB',
  //     color: 'White',
  //     display: '6.2 inch',
  //     processor: 'MediaTek',
  //   },
  //   {
  //     name: 'Mi Note 9 Pro',
  //     price: '15000',
  //     ram: '6GB',
  //     rom: '64GB',
  //     color: 'Black',
  //     display: '6.5 inch',
  //     processor: 'snapdragon',
  //   },
  //   {
  //     name: 'IPhone X',
  //     price: '95000',
  //     ram: ` --- `,
  //     rom: '256GB',
  //     color: 'Rose Gold',
  //     display: '6 inch',
  //     processor: 'Apple A13',
  //   },
  //   {
  //     name: 'Vivo',
  //     price: '25000',
  //     ram: '6GB',
  //     rom: '256GB',
  //     color: 'Blue',
  //     display: '6 inch',
  //     processor: 'Snapdragon',
  //   },
  //   {
  //     name: 'Oppo',
  //     price: '12000',
  //     ram: '4GB',
  //     rom: '32GB',
  //     color: 'Nebula',
  //     display: '5.4 inch',
  //     processor: 'MediaTek',
  //   },
  //   {
  //     name: 'Poco F2',
  //     price: '25000',
  //     ram: '4GB',
  //     rom: '64GB',
  //     color: 'Pink',
  //     display: '6.5 inch',
  //     processor: 'Snapdragon',
  //   },
  //   {
  //     name: 'Samsung M02',
  //     price: '11000',
  //     ram: '4GB',
  //     rom: '64GB',
  //     color: 'Rock Red',
  //     display: '5.5 inch',
  //     processor: 'Snapdragon',
  //   },
  // ];

  head = {
    name: 'Mobile',
    amount: 'Price',
  };

  private _headerData = new Subject<any>();
  headerData$ = this._headerData.asObservable();

  private _mobileData = new Subject<any>();
  mobileData$ = this._mobileData.asObservable();

  private _count = new Subject<number>();
  count$ = this._count.asObservable();

  delete(data: any) {
    this.dataServices.removeDevice(data.id);
  }

  async updateData() {
    await setInterval(() => {
      this.fetchData(), 1000;
    });
    this._mobileData.next(this.devices);
    this._count.next(this.devices.length);
    this.dataServices.getData();
  }

  updateHeader(name: string, amount: string) {
    this.head.amount = amount;
    this.head.name = name;
    this._headerData.next(this.head);
  }

  addData(data: any) {
    this.dataServices.postData(data);
    this.fetchData();
  }
}
