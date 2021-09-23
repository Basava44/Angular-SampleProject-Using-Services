import { Component, OnInit } from '@angular/core';
import { DevicesDataService } from './devicesData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mobileData:DevicesDataService){
  }

  show: boolean = false;

  ngOnInit(){
    // for(let i in this.mobileData.brands)
    // {
    //   console.log(i);
    //   for(let j of this.mobileData.brands[i])
    //   {
    //     for(const k in j){
    //       console.log(k);
    //       console.log(j[k]);
    //     }
    //   }
    // } 
    this.mobileData.show.subscribe(
      data => this.show = data
    )
  }

}
