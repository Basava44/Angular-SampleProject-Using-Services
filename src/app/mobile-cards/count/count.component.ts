import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileServices } from '../../mobile-data.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent implements OnInit {
  count:number = 0;

  constructor(private Data:MobileServices, private route:Router){
    this.count = this.Data.devices.length;
  }

  ngOnInit(){
    this.Data.searchCount.subscribe(
      count => {this.count = count}
    )
  }

  ToAddMobile(){
    this.route.navigate(['/addmobile']);
  }

}
