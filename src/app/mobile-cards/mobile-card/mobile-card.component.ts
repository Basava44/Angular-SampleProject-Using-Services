import {
  Component,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MobileData } from 'src/app/mobileData.module';
import { MobileServices } from '../../mobile-data.service';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss'],
})
export class MobileCardComponent{

  @Input()
  mobileData!:MobileData;

  updateAmount: boolean = false;

  edit() {
    this.updateAmount = !this.updateAmount;
  }

  active(data: any) {
    if (data.path[1].className == 'cardwrapper') {
      for (let i = 0; i < data.path[3].children.length; i++) {
        data.path[3].children[i].children[0].style.border = '2px solid black';
        data.path[3].children[i].children[0].style.backgroundColor =
          'rgb(248, 248, 248)';
      }
      data.path[1].style.border = '4px solid green';
      data.path[1].style.backgroundColor = 'rgba(187, 222, 251, 0.137)';
    }
  }

  @ViewChild('button', { static: true }) something!: ElementRef;
  change() {
    console.log(this.something.nativeElement);
  }

  constructor(private Data: MobileServices) {}

  async remove(event: object) {
    this.Data.delete(event);
    await setTimeout(()=>{
      this.Data.fetchData();
    },1000);
  }

  updateHeader(name: string, amount: string) {
    this.Data.updateHeader(name,amount);
  }
}
