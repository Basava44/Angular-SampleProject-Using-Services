import { Component, OnInit } from '@angular/core';
import { MobileServices } from '../../mobile-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentMobile: string = 'Mobile';
  currentPrice: string = 'Price';

  constructor(private Data:MobileServices) {
  }

  ngOnInit(){
    // this.Data.headerData$.subscribe(
    //   data => {
    //     this.currentMobile = data.name;
    //     this.currentPrice = data.amount;
    //   }
    // )

    this.Data.headerData.subscribe(
      (data) => {
        this.currentMobile = data.name;
        this.currentPrice = data.amount;
      }
    );
  }

}
