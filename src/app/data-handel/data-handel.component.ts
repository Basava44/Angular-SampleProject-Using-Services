import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServices } from '../dataServices.service';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-data-handel',
  templateUrl: './data-handel.component.html',
  styleUrls: ['./data-handel.component.scss'],
})

export class DataHandelComponent implements OnInit {
  constructor(
    private DataServices: DataServices,
    private MobileServices: MobileServices
  ) {}

  disable = false;

  ngOnInit(){
    this.MobileServices.count$.subscribe(
      data => {
        this.disable = data>0 ? false : true;
      }
    )
  }


  deleteAll() {
    this.DataServices.clearData();
    this.MobileServices.fetchData();
  }

  update() {
    this.MobileServices.fetchData();
  }
}
