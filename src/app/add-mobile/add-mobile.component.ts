import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.scss'],
})
export class AddMobileComponent {
  constructor(
    private route: Router,
    private Data:MobileServices,
  ) {}

  onSubmit(data:NgForm){
    data.value.rom = data.value.rom + ' GB';
    data.value.ram = data.value.ram + ' GB';
    data.value.display = data.value.display + ' inch';
    this.Data.devices.push(data.value);
    this.route.navigate(['/']);
  }

}
