import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataServices {

    constructor(private http:HttpClient){}

    postData(data: any) {
        this.http
        .post(
            'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json',
            data
        )
        .subscribe((data) => {console.log(data)});
    }

    getData() {
        this.http
          .get(
            'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json')
          .subscribe(
            (data) => {
              console.log(data);
            }
          );
    }

    clearData(){
        this.http.delete(
            'https://mobile-data-36e9d-default-rtdb.firebaseio.com/devices.json'
        ).subscribe(data => console.log(data));
    }

    



}