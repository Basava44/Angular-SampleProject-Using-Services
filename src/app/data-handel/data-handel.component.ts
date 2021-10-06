import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServices } from '../dataServices.service';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-data-handel',
  templateUrl: './data-handel.component.html',
  styleUrls: ['./data-handel.component.scss'],
})

export class DataHandelComponent implements OnInit, OnDestroy {
  constructor(
    private DataServices: DataServices,
    private MobileServices: MobileServices
  ) {}

  disable = false;
  subscription! : Subscription;

  ngOnInit(){
   this.subscription =  this.MobileServices.count.subscribe(
      data => {
        this.disable = data>0 ? false : true;
      }
    )
  }


  deleteAll() {
    const Confirm = confirm('Do You want to clear all Data ?');
    if(Confirm){
      this.DataServices.clearData();
      this.MobileServices.fetchData();
    }
  }

  update() {
    this.MobileServices.fetchData();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
