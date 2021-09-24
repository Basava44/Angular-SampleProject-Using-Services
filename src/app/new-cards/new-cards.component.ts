import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesDataService } from '../devicesData.service';

@Component({
  selector: 'app-new-cards',
  templateUrl: './new-cards.component.html',
  styleUrls: ['./new-cards.component.scss'],
})
export class NewCardsComponent implements OnInit {
  constructor(private mobileData: DevicesDataService,
              private router: Router,
              private route: ActivatedRoute) {}

  MobileDataBase: any = this.mobileData.brands;
  devices: any = [];
  brandNames: string[] = [];
  data: string = '';
  show: boolean = false; //overlay Show
  compareCount: number = 0;

  ngOnInit(): void {
    for (let i in this.MobileDataBase) {
      this.devices.push(this.MobileDataBase[i]);
      this.brandNames.push(i);
    }
    this.mobileData.show.subscribe((data) => (this.show = data));
    this.mobileData.compareCount.subscribe(
      data => {
        this.compareCount = data;
      }
    )
  }

  search: boolean = false;
  onSearch() {
    this.search = !this.search;
  }

  openComparisonPage(){
    this.router.navigate(['compare'],{relativeTo:this.route});
  }
}
