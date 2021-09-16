import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.scss']
})
export class AddMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCard(event:any){
    console.log(event);
  }

}
