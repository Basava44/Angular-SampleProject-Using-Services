import { Component, OnInit } from '@angular/core';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  count:number = 0;

  constructor(private Data:MobileServices){
    this.count = this.Data.devices.length;
  }

  ngOnInit(){
    this.Data.count$.subscribe(
      data => {this.count = data}
    )
  }

}
