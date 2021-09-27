import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesDataService } from '../devicesData.service';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-new-cards',
  templateUrl: './new-cards.component.html',
  styleUrls: ['./new-cards.component.scss'],
})
export class NewCardsComponent implements OnInit {
  constructor(
    private mobileData: DevicesDataService,
    private mobileSevices: MobileServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  devices: any = this.mobileData.brands;
  brandNames: string[] = [];
  data: string = '';
  show: boolean = false; //overlay Show
  compareCount: number = 0;

  ngOnInit(): void {
    this.mobileData.show.subscribe((data) => (this.show = data));
    this.mobileData.compareCount.subscribe((data) => {
      this.compareCount = data;
    });
    this.mobileData.alldevices.subscribe(
      data => {
        this.devices = data;
      }
    )
  }

  search: boolean = false;
  onSearch() {
    this.search = !this.search;
  }

  openComparisonPage() {
    this.router.navigate(['compare'], { relativeTo: this.route });
  }

  filterOut(ram: boolean, rom: boolean, price: boolean){
    this.mobileData.filterOut(ram, rom, price, this.devices);
  }

  sortItems(sort: HTMLSelectElement){
    this.mobileData.sortItems(sort.value, this.devices);
  }


}
