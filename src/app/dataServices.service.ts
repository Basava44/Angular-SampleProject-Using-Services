import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MobileData } from './mobileData.module';

import { map } from 'rxjs/operators';
import { MobileServices } from './mobile-data.service';

@Injectable({ providedIn: 'root' })
export class DataServices {
  constructor(private http: HttpClient) {}

  postData(data: any) {
    this.http
      .post(
        'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json',
        data
      )
      .subscribe((responce: any) => {
        console.log('Device with id ' + responce.name + ' is added to DB');
      },
        error => {console.log(error);}
      );
  }

  getData() {
    return this.http
      .get<{ [key: string]: MobileData }>(
        'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json'
      )
      .pipe(
        map((responseData) => {
          const newArray: MobileData[] = [];
          for (const key in responseData) {
            newArray.push({ ...responseData[key], id: key });
          }
          return newArray;
        })
      );
  }

  clearData() {
    this.http
      .delete(
        'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json'
      )
      .subscribe((data) => console.log(data));

    console.log('Data Cleared');
  }

  removeDevice(deviceKey: string) {
    const url: string =
      'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices/' +
      deviceKey +
      '.json';
    this.http.delete(url).subscribe((data) => console.log(data));

    console.log('Device Removed');
  }
}
