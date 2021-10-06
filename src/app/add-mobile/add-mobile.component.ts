import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileServices } from '../mobile-data.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.scss'],
})
export class AddMobileComponent{
  @ViewChild('form', { static: true }) submitData!: NgForm;

  constructor(
    private route: Router,
    private Data: MobileServices,
    private http: HttpClient,
  ) {}

  onSubmit() {
    this.dataValidation();
    if (this.submitData.valid) {
      this.Data.addData(this.submitData.value);
      this.route.navigate(['/cards']);
    }
  }

  dataValidation() {
    if (this.submitData.value.rom != '')
      this.submitData.value.rom = this.submitData.value.rom + 'GB';
    else this.submitData.value.rom = '---';
    if (this.submitData.value.ram != '')
      this.submitData.value.ram = this.submitData.value.ram + 'GB';
    else this.submitData.value.ram = '---';
    this.submitData.value.display = this.submitData.value.display + ' inch';
  }
}
