import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

  deleteAll() {
    this.DataServices.clearData();
    this.MobileServices.updateData();
  }

  update() {
    this.MobileServices.fetchData();
  }

  disable = (this.MobileServices.devices.length>0)? true:false;
}
