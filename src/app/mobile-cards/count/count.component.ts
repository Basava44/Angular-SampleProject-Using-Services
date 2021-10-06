import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MobileServices } from '../../mobile-data.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit, OnDestroy {
  count: number = 0;
  subscription!: Subscription;

  constructor(private Data: MobileServices, private route: Router) {
    this.count = this.Data.devices.length;
  }

  ngOnInit() {
    this.subscription = this.Data.searchCount.subscribe((count) => {
      this.count = count;
    });
  }

  ToAddMobile() {
    this.route.navigate(['/addmobile']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
