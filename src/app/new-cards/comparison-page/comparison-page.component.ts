import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesDataService } from 'src/app/devicesData.service';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss'],
})
export class ComparisonPageComponent implements OnInit, OnDestroy {
  constructor(
    private deviceDataService: DevicesDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  compareData: any[] = [];

  ngOnInit(): void {
    this.compareData = this.deviceDataService.comparisionArray;
    if(this.compareData.length === 0)
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  gotoMainPage() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  ngOnDestroy() {
    this.deviceDataService.clearComparisionArray();
  }
}
