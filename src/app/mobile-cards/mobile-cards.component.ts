import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('searchBar',{static:false}) bar!: ElementRef;

  onSearch(){
    this.search = !this.search;
    console.log(this.bar.nativeElement.value);
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
